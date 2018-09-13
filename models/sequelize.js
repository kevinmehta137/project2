const Sequelize = require('sequelize')
const UserModel = require('./models/user')

const sequelize = new Sequelize('gig_finderdb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
})

const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  User

}