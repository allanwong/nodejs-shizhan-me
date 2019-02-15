'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    yourColumn1: DataTypes.STRING,
    yourColumn2: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};