const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');


router.post('/registarion', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.check);


module.exports = router;