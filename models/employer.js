module.exports = function(sequelize, DataTypes) {
  var employer = sequelize.define("employer_signup", {
      employer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      employer_name: {
         type: DataTypes.TEXT,
         allownull: false
      },
      employer_email:{
        type: DataTypes.TEXT,
        allownull: false
      },
      employer_password:{
        type: DataTypes.TEXT,
        allownull: false
      },
      employer_confirmpassword:{
        type: DataTypes.TEXT,
        allownull: false
      },

 
  });
  return employer;
};
