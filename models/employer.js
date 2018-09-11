module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("employer_signup", {
      employer_id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      employer_name: {
         type: type.STRING,
         allownull: false
      },
      employer_email:{
        type: type.INTEGER,
        allownull: false
      },
      employer_password:{
        type: type.INTEGER,
        allownull: false
      },
      employer_confirmpassword:{
        type: type.INTEGER,
        allownull: false
      },

 
  });
  return Example;
};
