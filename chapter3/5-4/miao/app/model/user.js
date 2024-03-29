'use strict';
module.exports = app => {
  const { INTEGER, STRING, TINYINT } = app.Sequelize;
  const User = app.model.define('User', {
    email: STRING(40),
    password: STRING,
    inviter_id: INTEGER,
    username: STRING(40),
    weibo: STRING(40),
    weixin: STRING(40),
    team_id: INTEGER,
    receive_remote: TINYINT(1),
    email_verifyed: TINYINT(1),
    avatar: STRING(40),
  });

  return User;
};
