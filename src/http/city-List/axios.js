import axios from 'axios'
import config from './config'

const contact = axios.create({
  baseURL: config.baseURL || '',
  timeout: config.timeout || 20000
})
contact.interceptors.request.use(function(axiosConfig) {
  config.hooks && config.hooks.beforeReq && config.hooks.beforeReq()
  return axiosConfig
})

contact.interceptors.response.use(
  function(response) {
    config.hooks && config.hooks.AfterReq && config.hooks.AfterReq()
    return response.data
  },
  function(error) {
    config.hooks && config.hooks.AfterReq && config.hooks.AfterReq()
    return Promise.reject(error)
  }
)
// 试试
export default contact
