const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { USERS_LIST_DB } = require('./utils/users-list.db');
const { generateTokenOnLogin, validateToken } = require('./utils/jwt-manager');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(cors());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const USER_FOUND = USERS_LIST_DB.find(user => user.username === username && user.password === password);

    if (!USER_FOUND) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const userToken = generateTokenOnLogin(username);

    return res.json({ token: userToken });
});

app.post('/validate-token', (req, res) => {
    const authHeader = req.headers['authorization'];
    console.log('auth', authHeader);
    
    const validToken = validateToken(authHeader);
    console.log('token:', validToken);

    res.json({ });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
