<template>
  <div class="loginbox">
    <el-input class="input" v-model="email" placeholder="邮箱" />
    <el-input
      class="input"
      show-password
      v-model="password"
      placeholder="密码"
    />
    <div class="buttons">
      <div>
        <el-link
          class="link"
          href="https://account.hestudio.net/login/forgetpassword/"
          :underline="false"
          type="primary"
          >忘记密码</el-link
        >
        <el-link
          href="https://account.hestudio.net/register/"
          :underline="false"
          type="primary"
          >注册</el-link
        >
      </div>
      <el-button type="primary" @click="login" round>登录</el-button>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import { ElLoading } from "element-plus";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        ElMessage.error("是不是漏了什么东西？");
      } else {
        if (this.password.length < 8) {
          ElMessage.error("密码长度至少为8个字符。");
        } else if (!/[A-Z]/.test(this.password)) {
          ElMessage.error("密码必须包含至少一个大写字母。");
        } else if (!/[a-z]/.test(this.password)) {
          ElMessage.error("密码必须包含至少一个小写字母。");
        } else if (!/[0-9]/.test(this.password)) {
          ElMessage.error("密码必须包含至少一个数字。");
        } else if (!/[^A-Za-z0-9]/.test(this.password)) {
          ElMessage.error("密码必须包含至少一个特殊字符。");
        } else if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(this.email)) {
          ElMessage.error("请输入有效的电子邮件地址。");
        } else {
          const loadingInstance = ElLoading.service();
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
            }),
          };
          fetch("https://api.hestudio.net/account/login", requestOptions)
            .then((response) => response.json())
            .then((data) => {
              if (data.status) {
                loadingInstance.close();
                localStorage.setItem("token", data.token);
                ElMessage({
                  message: "登录成功",
                  type: "success",
                });
                this.$router.push("/");
              } else {
                loadingInstance.close();
                ElMessage.error(data.msg);
              }
            });
        }
      }
    },
  },
  mounted() {
    if (localStorage.getItem("token")) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: localStorage.getItem("token"),
        }),
      };
      fetch(
        "https://api.hestudio.net/account/verifylogin",
        requestOptions
      ).then(async (response) => {
        const result = await response.json();
        if (result.status) {
          ElMessage({
            message: "你已登录，正在为您跳转到主页...",
            type: "success",
          });
          this.$router.push("/");
        }
      });
    }
  },
};
</script>

<style>
.loginbox {
  margin-top: 20px;
  margin-bottom: 20px;
}
.input {
  margin-bottom: 10px;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
.link {
  margin-right: 10px;
}
</style>
