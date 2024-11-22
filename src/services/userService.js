const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.registerUser = async ({ username, email, password }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error('Email already in use');

    const user = new User({ username, email, password });
    await user.save();
    return { username: user.username, email: user.email };
};

exports.loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
    return token;
};