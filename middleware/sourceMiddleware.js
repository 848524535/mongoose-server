//动态获取集合实例
const inflection = require('inflection')

module.exports = options => {
  return async (req, res, next) => {
    //这里要想办法拿到集合名字
    console.log(req.params.resource)
    console.log(req.body)
    let modelName = inflection.classify(`${req.params.resource}`)
    console.log(modelName)//User
    //这个中间件的集合要在下一个中间件中使用 得把集合挂到两个中间件都能访问的地方
    req.Model = require(`../models/${modelName}`)
    console.log(req.Model)
    next()
  }
}