module.exports = (sequelize, type) => {
    return sequelize.define('employee_signup', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        gig_date: {
            type: type.DATEONLY,
            allownull: false
        },
        gig_description: {

            type: type.TEXT,
            allownull: false
        },
        gig_location: {

            type: type.TEXT,
            allownull: false
        },
        gig_number_of_hours: {

            type: type.INTEGER,
            allownull: false
        },
        gig_number_of_people: {

            type: type.INTEGER,
            allownull: false
        },
        gig_rate: {

            type: type.INTEGER,
            allownull: false
        },
        gig_total_pay: {

            type: type.INTEGER,
            allownull: false
        },
    })
}