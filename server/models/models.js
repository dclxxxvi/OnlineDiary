const sequelize = require(`../db`);
const {DataTypes} = require(`sequelize`);

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
});

const TaskList = sequelize.define('task_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const UserTask = sequelize.define('user_task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    start_time: {type: DataTypes.DATE},
    end_time: {type: DataTypes.DATE},
})

User.hasOne(TaskList);
TaskList.belongsTo(User);

TaskList.hasMany(UserTask);
UserTask.belongsTo(TaskList);

Task.hasMany(UserTask);
UserTask.belongsTo(Task);

module.exports = {
    User,
    TaskList,
    UserTask,
    Task
}