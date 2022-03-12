const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const tasksRouter = require('./tasksRouter');
const taskRouter = require('./taskRouter');


router.use('/user', userRouter);
router.use('/tasks', tasksRouter);
router.use('/task', taskRouter);  

module.exports = router;
