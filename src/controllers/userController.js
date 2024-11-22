const User = require('../models/userModel');
const userService = require('../services/userService');

exports.register = async (req, res) => {
    try {
        const user = await userService.registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const token = await userService.loginUser(req.body);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};