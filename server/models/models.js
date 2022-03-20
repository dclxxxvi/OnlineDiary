const sequelize = require(`../db`);
const {DataTypes} = require(`sequelize`);

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
});

const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    startTime: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    endTime: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
})

User.hasMany(Task);
Task.belongsTo(User);

module.exports = {
    User,
    Task
}