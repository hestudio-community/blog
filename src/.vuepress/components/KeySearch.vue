<template>
  <el-form>
    <p>
      <el-input v-model="trade_id" placeholder="请输入订单号" clearable />
    </p>
    <p>
      <el-input v-model="phone" placeholder="请输入绑定的手机号" clearable />
    </p>
    <div>
      <vue-hcaptcha @verify="verify" ref="captcha" v-bind="hcaptcha"
        sitekey="c52f98bd-b35e-4878-9325-1f600841ad45"></vue-hcaptcha>
    </div>
    <p>
      <el-button @click="search" v-bind="button" :icon="Search">{{ buttonmsg }}</el-button>
      <el-button @click="help" :icon="QuestionFilled" circle />
    </p>
  </el-form>
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
      buttonmsg: '查询',
      trade_id: '',
      phone: '',
      token: '',
      button: {
        loading: false,
        disabled: true,
        type: "primary",
        round: true,
      },
      hcaptcha: {
        theme: 'light',
      }
    };
  },
  methods: {
    /**
     * verify function for hcaptcha
     * @param {string} token token fron hcaptcha
     */
    verify(token) {
      this.token = token
      this.button.disabled = false
      this.button.type = 'primary'
      this.message =''
      this.buttonmsg='查询'
    },
    /**
     * help button to go to /get-help pages
     */
    help() {
      this.$router.push({
        path: '/get-help'
      })
    },
    search() {
      /**
       * 
       * @param {*} th this
       * @param {boolean} config 
       */
      async function button_loading(th, config) {
        th.button.loading = config
      }
      /**
       * 
       * @param {boolean} config button switch
       */
      const button_load = (config) => {
        button_loading(this, config)
      }
      /**
       * 
       * @param {string} msg show message
       */
      const show = (msg) => {
        this.message = msg
      }
      button_load(true)
      var msg = '查询中...'
      this.buttonmsg = msg
      show('')
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const url = 'https://api.hestudio.net/keysearch/v2?' + 'trade_id=' + this.trade_id + '&phone=' + this.phone + '&token=' + this.token
      const verifyget = (src) => {
        if (src.exist) {
          const status = src.status
          /**
           * 
           * @param {boolean | string} status 
           */
          const status_get = (status) => {
            if (status === true) {
              this.button.type = 'success'
              this.buttonmsg = '查询成功'
              return '正常'
            } else if (status === 'lock') {
              this.button.type = 'warning'
              this.buttonmsg = '已锁定'
              return '已锁定'
            } else if (status === 'ban') {
              this.button.type = 'danger'
              this.buttonmsg = '已封禁'
              return '已封禁'
            }
          }
          msg = String('Key: ' + src.key + "\n" + '状态: ' + status_get(status))
          show(msg)
        } else {
          msg = src.msg
          show('')
          this.button.type = 'info'
          this.buttonmsg = msg
        }
      }
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => verifyget(result))
      button_load(false)
      this.button.disabled = true
      this.$refs.captcha.reset()
    },
  },
  mounted() {
    console.log('KeySearch Component is running.')
    console.log('Version: v1.0.7')
  }
}
</script>