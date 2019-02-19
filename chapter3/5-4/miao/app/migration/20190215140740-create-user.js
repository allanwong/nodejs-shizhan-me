'use strict';
module.exports = {
  up: (queryInterface, { INTEGER, STRING, DATE, TINYINT }) => {
    return queryInterface.createTable('Users', {
      // 主键
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      // 邮箱
      email: STRING(40),
      // 密码
      password: STRING,
      // TODO:字段注释
      inviter_id: INTEGER,
      // 用户名字
      username: STRING(40),
      // 微博名称
      weibo: STRING(40),
      // 微信号
      weixin: STRING(40),
      // 团队id
      team_id: INTEGER,
      // 0 or 1 接受远程雇佣
      receive_remote: TINYINT(1),
      // 0 or 1 邮箱是否验证
      email_verifyed: TINYINT(1),
      // 头像
      avatar: STRING(40),
      // 创建时间
      created_at: {
        allowNull: false,
        type: DATE,
      },
      // 更新时间
      updated_at: {
        allowNull: false,
        type: DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
