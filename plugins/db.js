const mongoose = require('mongoose')
//接入数据库
mongoose.connect('mongodb://127.0.0.1:27017/db_blog')
//接管控制
const db = mongoose.connection

db.on('error', (error) => {
  console.log(error)
})
db.on('open', (err) => {
  console.dir('mongodb://127.0.0.1:27017/db_blog is open')
})

module.exports = { mongoose }

