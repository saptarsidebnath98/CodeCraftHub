const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.authenticate = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, config.jwtSecret);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
};