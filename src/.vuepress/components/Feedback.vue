<template>
  <div v-if="status">
    <form method="post" action="https://support.qq.com/product/659034">
      <input type="hidden" name="openid" :value="userid" />
      <input type="hidden" name="nickname" :value="username" />
      <input type="hidden" name="avatar" :value="avatar" />
      <input type="hidden" name="user_signature" :value="signature" />
      <button type="submit">进入反馈界面</button>
    </form>
  </div>
  <div v-else>请<a href="/login/">登录 heStudio Account</a>后进行反馈</div>
</template>

<script>
export default {
  data() {
    return {
      status: false, // 登录状态，用于判断是否报错
      username: "", // 用户名
      avatar: "", // 头像URL地址
      userid: "", // 用户ID，用于区分用户
      signature: "", // 用户签名，用于验证请求
    };
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
        "https://api.hestudio.net/account/getinformation",
        requestOptions
      ).then(async (response) => {
        const result = await response.json();
        if (result.status) {
          this.username = result.info.username;
          this.avatar = result.info.avatar;
          this.userid = result.info.userid;
          await fetch("https://api.hestudio.net/feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              token: localStorage.getItem("token"),
            }),
          }).then(async (response) => {
            const result = await response.json();
            this.signature = result.signature;
            this.status = true;
          });
        } else {
          this.status = false;
        }
      });
    }
  },
};
</script>
