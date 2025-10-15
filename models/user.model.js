const { DataTypes } = require("sequelize");

const sequelize = ("./dbmodel.js");

const User = sequelize.define("users", {
   first_name: {
      type: DataTypes.STRING(255),
      allowNull: false
   },
   last_name: {
      type: DataTypes.STRING(255),
      allowNull: false
   },
   username: {
      type: DataTypes.STRING(255),
      allowNull: false
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   },
   user_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   is_active: {
      type: DataTypes.ENUM,
      values:[0,1]
   }
});

exports.modules = User;