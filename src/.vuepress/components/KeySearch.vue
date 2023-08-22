<template>
  <p><input v-model="trade_id" placeholder="请输入订单号" /></p>
  <p><input v-model="phone" placeholder="请输入绑定的手机号" /></p>
  <button @click="search">查询</button>
  <p>{{ message }}</p>
</template>
<script>

export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    search() {
      const show = (msg) => {
        this.message = msg
      }
      var msg = '查询中...'
      show(msg)
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const url = 'https://api.hestudio.net/keysearch?' + 'trade_id=' + this.trade_id + '&phone=' + this.phone
      function verifyget(src) {
        console.log(src.exist)
        if (src.exist) {
          const status = src.status
          function status_get(status) {
            if (status === true) {
              return '正常'
            } else if (status === 'lock') {
              return '已锁定'
            } else if (status === 'ban') {
              return '已封禁'
            }
          }
          msg = String('Key: ' + src.key + "\n" + '状态: ' + status_get(status))
          show(msg)
        } else {
          console.log(src.msg)
          msg = src.msg
          show(msg)
        }
      }
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => verifyget(result))
    },
  },
}
</script>