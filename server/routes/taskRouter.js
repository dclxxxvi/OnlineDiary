const Router = require('express');
const router = new Router();
const taskController = require('../controllers/taskController');


router.post('/', taskController.create);
router.get('/:id', taskController.getByUser);

module.exports = router;