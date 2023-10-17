<template>
  <form>
    <p>
      <el-input v-model="trade_id" placeholder="请输入订单号" clearable />
    </p>
    <p>
      <el-input v-model="phone" placeholder="请输入绑定的手机号" clearable />
    </p>
    <vue-hcaptcha @verify="verify" v-bind="hcaptcha" sitekey="c52f98bd-b35e-4878-9325-1f600841ad45"></vue-hcaptcha>
    <p>
      <el-button @click="search" v-bind="button" type="primary" :icon="Search" round>查询</el-button>
      <el-button @click="help" :icon="QuestionFilled" circle />
    </p>
  </form>
  <p>{{ message }}</p>
</template>


<script setup>
import {
  Search,
  QuestionFilled
} from '@element-plus/icons-vue'
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
</script>

<script>
export default {
  data() {
    return {
      message: '',
      trade_id: '',
      phone: '',
      token: '',
      button: {
        loading: false,
        disabled: true,
      },
      hcaptcha: {
        theme: 'light',
      }
    };
  },
  methods: {
    verify(token) {
      this.token = token
      this.button.disabled = false
    },
    help() {
      this.$router.push({
        path: '/get-help'
      })
    },
    search() {
      async function button_loading(th, config) {
        th.button.loading = config
      }
      const button_load = (config) => {
        button_loading(this, config)
      }
      const show = (msg) => {
        this.message = msg
      }
      button_load(true)
      var msg = '查询中...'
      show(msg)
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const url = 'https://api.hestudio.net/keysearch/v2?' + 'trade_id=' + this.trade_id + '&phone=' + this.phone + '&token=' + this.token
      function verifyget(src) {
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
          button_load(false)
          show(msg)
        } else {
          msg = src.msg
          button_load(false)
          show(msg)
        }
      }
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => verifyget(result))
    },
  },
  mounted() {
    console.log('KeySearch Component is running.')
    console.log('Version: v1.0.5')
    const autodark = async () => {
      setInterval(() => {
        if (document.querySelector('html[data-theme="dark"]')) {
          this.hcaptcha.theme = 'dark'
        } else {
          this.hcaptcha.theme = 'light'
        }
      }, 1000);
    }
    autodark()
  }
}
</script>