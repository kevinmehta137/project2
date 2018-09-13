module.exports = function(sequelize, DataTypes) {
    var postjob = sequelize.define("add_gigs", {
        employer_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        gigs_date: {
           type: DataTypes.DATE,
           allownull: false
        },
        gigs_description:{
          type: DataTypes.TEXT,
          allownull: false
        },
        gigs_location:{
          type: DataTypes.TEXT,
          allownull: false
        },
        gigs_hours:{
          type: DataTypes.TEXT,
          allownull: false
        },
        gigs_people_needed:{
            type: DataTypes.TEXT,
            allownull: false
          },
        gigs_rate:{
            type: DataTypes.TEXT,
            allownull: false
        },
        gigs_total_pay:{
            type: DataTypes.TEXT,
            allownull: false
          },
  
   
    });
    return postjob;
  };