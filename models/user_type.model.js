const { DataTypes } = require("sequelize");

const sequelize = ("./dbmodel.js");

const UserTypes = sequelize.define("user_types", {
   name: {
      type: DataTypes.STRING(255),
      allowNull: false
   },
   is_active: {
      type: DataTypes.ENUM,
      values:[0,1]
   }
});

exports.modules = UserTypes