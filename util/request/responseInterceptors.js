/**
 * 相应拦截
 * @param {Object} http 
 */
module.exports = (vm) => {
  uni.$tn.http.interceptors.response.use((response) => { // 可以使用async await 做异步操作
    const data = response.data
    // 自定义参数
    const custom = response.config?.custom
    // 服务端返回的状态码不等于200，则reject()
    if (data.code !== 200) {
      // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
      if (custom.toast !== false) {
        uni.$tn.message.toast(data.message)
      }
      // 如果需要catch返回，则进行reject
      if (custom?.catch) {
        return Promise.reject(data)
      } else {
        // 返回pending中的promise
        return new Promise(() => {})
      }
    }
    return data.data || {}
  }, (response) => { // 对响应错误做点什么 （statusCode !== 200）
    return Promise.reject(response)
  })
}