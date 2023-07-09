
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: String,
  author:String
})
//导出model 即集合实例
module.exports = mongoose.model('article', schema)