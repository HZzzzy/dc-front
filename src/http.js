import { Message } from 'element-ui'
import axios from 'axios'

var instance = axios.create({
  baseURL: '/admin',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 1000 * 20
})

instance.interceptors.request.use(function (config) {
  config.url = encodeURI(config.url)
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

instance.interceptors.response.use((resp) => {
  if (typeof resp.data === 'string') {
    return Promise.reject(new Error('解析异常'))
  } else {
    return Promise.resolve(resp)
  }
}, (error) => {
  if (error.response && error.response.data) {
    Message.error("there're some problems")
  }
  return Promise.reject(error)
})

export default instance
