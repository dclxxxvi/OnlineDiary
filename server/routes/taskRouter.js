const Router = require('express');
const router = new Router();
const taskController = require('../controllers/taskController');


router.post('/', taskController.create);
router.get('/:id', taskController.getByUserId);
router.delete('/:id', taskController.delete);
router.put('/:id', taskController.edit)

module.exports = router;