const jwt = require('jsonwebtoken');

const SECRET_KEY = 'CURSO_ANGULAR';

const generateTokenOnLogin = (username) => {
    return jwt.sign({ username }, SECRET_KEY, { expiresIn: 300 });
};

module.exports = { generateTokenOnLogin };