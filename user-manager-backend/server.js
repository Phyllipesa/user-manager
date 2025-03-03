const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const { USERS_LIST_DB } = require('./utils/users-list.db');
const { authenticateToken } = require('./middlewares/authenticate-token');
const { generateTokenOnLogin } = require('./utils/jwt-manager');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(cors());

app.post('/login', (req, res) => {
    setTimeout(() => {
        const { username, password } = req.body;
    
        const USER_FOUND = USERS_LIST_DB.find(user => user.username === username && user.password === password);
    
        if (!USER_FOUND) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        const userToken = generateTokenOnLogin(username);
    
        return res.json({ token: userToken });
    }, 2000)
});

app.post('/validate-token', authenticateToken, (req, res) => {
    res.json({ message: 'token válido', username: req.username });
});

app.put('/update-user', authenticateToken, (req, res) => {
    const tokenUserName = req.username;
    const newUserInfos = req.body;
    const { name, email, username, password } = newUserInfos;

    if (!name || !email || !username || !password) {
        return res.status(400).json({ message: 'Al fields (name, email, usernam, password) are required.' });
    }

    const USER_FOUND = USERS_LIST_DB.findIndex((user) => user.username === tokenUserName);

    if (USER_FOUND === -1) {
        return res.status(403).json({ message: 'User not found.' });
    }

    USERS_LIST_DB[USER_FOUND] = newUserInfos;

    const newToken = generateTokenOnLogin(username);



    return res.status(200).json({ message: 'User updated successfully.', token: newToken });

});

app.post('/create-user', authenticateToken, (req, res) => {
    setTimeout(() => {
        const tokenUserName = req.username;
        const newUser = req.body;
        const { name, email, username, password } = newUser;
    
        if (!name || !email || !username || !password) {
            return res.status(400).json({ message: 'Al fields (name, email, usernam, password) are required.' });
        }
    
        const USER_TOKEN_FOUND = USERS_LIST_DB.findIndex((user) => user.username === tokenUserName);
    
        if (USER_TOKEN_FOUND === -1) {
            return res.status(403).json({ message: 'User not found.' });
        }
    
        const USER_FOUND = USERS_LIST_DB.findIndex((user) => user.username === username);
        const USER_ALREADY_EXISTS = USER_FOUND !== -1;
    
        if (USER_ALREADY_EXISTS) {
            return res.status(409).json({ message: 'User already exists.' });
        }
    
        USERS_LIST_DB.push(newUser);
    
        return res.status(201).json({ message: 'User created successfully.' });
    }, 2000)
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
