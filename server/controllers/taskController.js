const {Task} = require('../models/models');
const ApiError = require('../error/ApiError');

class TaskController {
  async create(req, res, next) {
    try {
      const {name, description, startTime, endTime} = req.body;

      const task = await Task.create({name, description, startTime, endTime});
    
      return res.json(task);
    }
    catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async get(req, res) {
    const tasks = await Task.findAll();

    return res.json(tasks);
  }
}

module.exports = new TaskController();