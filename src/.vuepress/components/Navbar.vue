<template>
  <HopeNavbar>
    <template #endAfter>
      <div class="center">
        <div v-if="!status">
          <el-button text bg round type="primary" @click="login"
            >登录</el-button
          >
        </div>
        <div v-if="status">
          <el-dropdown class="center" @command="handleCommand">
            <div style="display: flex; align-items: center">
              <el-avatar :size="35" style="margin: 10px" :src="avatar" />
              <text>{{ username }}</text>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="console"
                  >管理 heStudio Account</el-dropdown-item
                >
                <el-dropdown-item command="exit">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </template>
  </HopeNavbar>
</template>

<script setup>
import HopeNavbar from "vuepress-theme-hope/modules/navbar/components/Navbar";
</script>

<script>
import { ElMessage } from "element-plus";
import { ElLoading } from "element-plus";

export default {
  data() {
    return {
      status: false,
      username: "",
      oldurl: "",
      avatar: "",
    };
  },
  methods: {
    login() {
      this.$router.push("/login/");
    },
    handleCommand(command) {
      switch (command) {
        case "exit":
          const loadingInstance = ElLoading.service();
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              token: localStorage.getItem("token"),
            }),
          };
          fetch("https://api.hestudio.net/account/logout", requestOptions).then(
            async (response) => {
              const result = await response.json();
              if (result.status) {
                loadingInstance.close();
                ElMessage({
                  message: result.msg,
                  type: "success",
                });
                localStorage.removeItem("token");
                this.$router.go(0); // 刷新页面，以更新登录状态
              } else {
                loadingInstance.close();
                ElMessage.error(result.msg);
              }
            }
          );
        case "console":
          window.open("https://account.hestudio.net", _blank);
      }
    },
  },
  mounted() {
    setInterval(() => {
      if (this.$route.path !== this.oldurl) {
        this.oldurl = this.$route.path;
        if (localStorage.getItem("token")) {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              token: localStorage.getItem("token"),
            }),
          };
          fetch(
            "https://api.hestudio.net/account/getinformation",
            requestOptions
          ).then(async (response) => {
            const result = await response.json();
            if (result.status) {
              this.status = true;
              this.username = result.info.username;
              this.avatar = result.info.avatar;
            } else {
              this.status = false;
            }
          });
        }
      }
    }, 2000);
  },
};
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
