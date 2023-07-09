const express = require('express')
const router = express.Router()
// const User = require('../models/User')
// const Article = require('../models/Article')

//添加数据
router.post('/', async (req, res) => {
  const item = await req.Model.create(req.body)
  console.log(req.body, '----------req.body')
  console.log(item)
  res.send(item)
})

//删除数据
router.delete('/:id', async (req, res) => {
  await req.Model.findByIdAndDelte(req.params.id)
  res.send({
    errMsg: 'ok'
  })
})
//修改数据
router.put('/:id', async (req, res) => {
  const item = await req.Model.findByIdAndUpdate(req.params.id, req.body)
  res.send(item)
})

//查询数据列表
router.get('/', async (req, res) => {
  const queryOPtions = req.body

  const items = await req.Model.find()

  res.send(items)
})

//查询数据细节
router.get('/:id', async (req, res) => {
  const item = await req.Model.findById(req.params.id)
  res.send(item)
})

module.exports = {
  busRoute: router
}