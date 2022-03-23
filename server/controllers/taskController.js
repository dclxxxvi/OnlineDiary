const {Task} = require('../models/models');
const ApiError = require('../error/ApiError');

class TaskController {
  async create(req, res, next) {
    try {
      const {name, description, startTime, endTime, userId} = req.body;
      if (!userId) {
        return next(ApiError.badRequest('Пользователь не авторизован'));
      }
      const task = await Task.create({name, description, startTime, endTime, userId});
      return res.json(task);
    }
    catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getByUser(req, res) {
    const {id} = req.params;
    const tasks = await Task.findAll({
      where: {userId: id}
    });
    return res.json(tasks);
  }
}

module.exports = new TaskController();