const ApiError = require("../error/ApiError");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, TaskList} = require('../models/models');

const generateJWT = (id, email) => {
    return jwt.sign(
        {id, email}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'});
}

class UserController {
    async registration(req, res, next) {
        const {email, password} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'));
        }
        const candidate = await User.findOne({where: {email: email}});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email: email, password: hashPassword});
        const taskList = await TaskList.create({userId: user.id});
        const token = generateJWT(user.id, email);
        return res.json({token});

    }

    async login(req, res, next) {
        const {email, password} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'));
        }
        const user = await User.findOne({where: {email: email}});
        if (!user) {
            return next(ApiError.badRequest('Пользователь с таким email не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Указан неверный пароль'));
        }
        const token = generateJWT(user.id, user.email);
        return res.json({token});
    }

    async check(req, res, next) {
        const token = generateJWT(req.user.id, req.user.email);
        return res.json({token});
    }
}

module.exports = new UserController();