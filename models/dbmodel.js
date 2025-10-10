const Sequelize = require("sequelize");

const sequelize = new Sequelize('inital_test_db', "root", '',  {
     logging: console.log,
     dialect: "mysql",
     define: {
        timestamps: false
     },
     sync: true
});

const User = sequelize.define("users", {
   username: {
      type: Sequelize.STRING,
      allowNull: false
   },
   email: {
      type: Sequelize.STRING,
      allowNull: false
   },
   password: {
      type: Sequelize.STRING,
      allowNull: false
   },
   // created_at : {type: Sequelize.DATE },
   // updated_at : {type: Sequelize.DATE },
});

module.exports.User = User;