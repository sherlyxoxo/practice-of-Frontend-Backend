// router.js 路由模块
const express = require('express')
const router = express.Router()

// 导入业务处理模块
const controller=require('../controller/controller')
router.get('/',controller.getRoot)
router.get('/getAllCourse', controller.getAllCourse)



// 导出路由模块
module.exports = router