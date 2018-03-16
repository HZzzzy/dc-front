// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import _ from 'lodash'
import http from './http'
import 'es6-promise/auto'
import {
  Button,
  Input,
  InputNumber,
  Checkbox,
  Radio,
  Loading,
  Dialog,
  Message,
  MessageBox,
  Select,
  Option,
  DatePicker,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from 'element-ui'

Vue.config.productionTip = false
Vue.prototype._ = _
Vue.prototype.$http = http

// 安装全局 element-ui 组件
Vue.use(Button)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
