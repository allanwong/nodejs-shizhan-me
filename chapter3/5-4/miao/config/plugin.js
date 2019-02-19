'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

// Sequelize是一个基于promise的关系型数据库Node.js ORM框架,当前支持MySQL、SQLite、PostgreSQL、Sql Server等数据库,
// 它具有可靠的事务支持，关系，读取复制等功能。
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
}

// 类似于Nodejs connect-flash 第三方模块。flash消息用于重定向跳转时传递消息。
// 后端发送flash message，前端动态响应flash message一次。
// 为什么说是“一次”呢？举个栗子：
// 当我们开发删除数据功能时，通常会这么做：点击删除按钮，将数据ID传递到后端，后端通过id，将数据从数据库里删除，
// 并重定向redirect到数据列表页，重定向的时候，我们可以发送一条flash message，告诉用户数据删除成功。
// 这个时候，当我们再次刷新数据列表页时，将不会出现之前那条flash message。
//
// 作者：Devid
// 链接：https://www.jianshu.com/p/b471acba92b5
// 來源：简书
// 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
exports.flash = {
    enable: true,
    package: 'egg-msg-flash'
}

// 这是一个验证表单的包，我们在 app/schemas 里定义的验证规则可以被夹在，供 ctx.verify 调用。类似 async-validator
exports.validator = {
    enable: true,
    package: 'egg-y-validator'
}

