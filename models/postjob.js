module.exports = function(sequelize, DataTypes) {
    var add_gigs = sequelize.define("add_gigs", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        gig_date: {
           type: DataTypes.DATE,
           defaultValue: DataTypes.NOW,
           allownull: false
        },
        gig_description:{
          type: DataTypes.TEXT,
          allownull: false
        },
        gig_location:{
          type: DataTypes.TEXT,
          allownull: false
        },
        gig_number_of_hours:{
          type: DataTypes.TEXT,
          allownull: false
        },
        gig_number_of_people:{
            type: DataTypes.TEXT,
            allownull: false
          },
        gig_rate:{
            type: DataTypes.TEXT,
            allownull: false
        },
        gig_total_pay:{
            type: DataTypes.TEXT,
            allownull: false
          },
  
   
    },{
      timestamps:false
    }
  );
    return add_gigs;
  };