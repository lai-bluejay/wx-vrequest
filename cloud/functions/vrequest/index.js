/**
 * v-request::cloud code
 * 无限制的小程序HTTP请求云函数
 * 你可以使用此功能，在小程序上请求访问如下类型的HTTP数据：
 * 1. 未进行备案的
 * 2. 未上HTTPS证书的
 * 3. 没绑定域名，直接IP地址访问的
 * ==========================
 * 注意：请勿使用此功能于非法用途！！仅供开发者学习使用！！
 * 开源地址和文档：https://github.com/guren-cloud/v-request
 * 古人云小程序（小程序推送等黑科技研究）：https://mssnn.cn
 * 更新时间：2018/12/29
 */


// 云函数入口文件
const cloud = require('wx-server-sdk');
const fetchit = require('node-fetch');

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return new Promise((RES, REJ) => {
    url = event.options.url
    options = event.options
    const res = {}
    fetchit(url, event.options).then((response) => {
      res.statusCode = response.status
      res.header = response.headers
      if (options.dataType === 'json') {
        return response.json()
      }
      if (options.responseType === 'arraybuffer') {
        return response.arrayBuffer()
      }
      if (options.responseType === 'text') {
        return response.text()
      }
      if (typeof options.dataType === 'undefined') {
        return response.json()
      }
      return Promise.resolve(null)
    }).then(data => {
      res.data = data
      RES(res)
    })
    });
}