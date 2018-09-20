  module.exports = function(sequelize, DataTypes) {
    var employer = sequelize.define("employer", {
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

  employer.associate = function(db) {
    employer.hasMany(db.add_gigs, {
      foreignKey: 'employer_id' 
    })
  
  }
 
    return employer;
  };
