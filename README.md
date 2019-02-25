# v-requset

项目灵感：[https://github.com/guren-cloud/v-request](https://github.com/guren-cloud/v-request)
感谢
项目用法上和Taro.request 完全一致, 对微信小程序的 API 进行了一些优化处理，例如异步的 API 支持 Promise 化，利用队列解决了 wx.request 的请求个数限制问题等等。


## 简介
在开发小程序浏览github的时候，发现api.github.com没法加到request合法域名中，因为没有在腾讯云备案。因此找了几种方案进行解决：
1. 备案自己的域名，通过tracker的方式进行域名转发。 -- 因此还申请了服务器、域名进行备案。。
2. 使用LeanCloud服务，直接使用leancloud做域名转发，没有备案和服务器的成本。
3. 发现可以通过云函数的方式完美解决。


## 项目特点
1. 封装了fetch，而不是request进行请求，返回的是response对象
2. 可以请求包括http、未备案域名、ip地址

## 安装
### 部署云函数
项目分为两部分，一个是我们的小程序云函数代码，在`cloud`目录中。
1. 把项目在微信开发者工具打开
2. 在微信开发者工具开通小程序云开发平台，
3. 然后初始化好环境之后，
4. 右键云函数、上传部署


### 部署客户端
另一个文件，就是主目录下的`v-request.js`文件，这个是运行在我们小程序里的SDK客户端文件。    
我们把它放入小程序的目录，如`utils/`目录中，然后在`app.js`文件中进行`require`加载即可：

## 使用
通过上边的部署，我们已经可以在小程序的任意位置进行使用我们的`v-request`黑科技了！    
使用方法很简单，和Taro.request完全一致。[Taro.request](https://nervjs.github.io/taro/docs/native-api.html#tarorequestobject)
