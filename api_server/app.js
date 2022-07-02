const express=require('express')
const app= express()
const cors = require('cors')

// 解决跨域问题
app.use(cors())

// 导入路由模块
const router = require('./router/router.js')

// 注册路由模块，让路由模块中的代码能够使用
app.use(router)

app.use('/images', express.static('images')) // => /images 为虚拟目录

//启动服务器
app.listen('3001', () => {
    console.log('express running at http://127.0.0.1:3001');
})