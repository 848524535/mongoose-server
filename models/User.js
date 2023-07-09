const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: String,
  password: {
    type: String,
    select: false//不展示该字段
  }
})
//导出model 即集合实例
module.exports = mongoose.model('User', schema)