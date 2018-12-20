import Vue from 'vue'
var Fly = require('flyio/dist/npm/wx.js')
var fly = new Fly()
// 添加拦截器
fly.interceptors.request.use((config, promise) => {
// 给所有请求添加自定义header
  config.headers['X-Tag'] = 'flyio'
  return config
})
// 配置请求基地址
Vue.prototype.$http = fly
fly.config.baseURL = 'http://10.1.78.193:8000/api/v2/'

export default fly
