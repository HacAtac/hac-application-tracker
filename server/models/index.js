const Application = require('./Application')
const User = require('./User')

Application.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
})

module.exports = {
  User,
  Application,
}
