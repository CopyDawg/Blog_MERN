const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://omarcory2:iWSAeS3SviBPGeLb@cluster0.q5kpnuz.mongodb.net/?retryWrites=true&w=majority');

const salt = bcrypt.genSaltSync(10);
const secret = 'KGjGFkkVfJKLhDRHKLjgdtjmbcxWegKoIg';

app.post('/register', async(req, res) => {
    const {username, password} = req.body;
    try {
        const userDoc = await User.create({ 
            username, 
            password: bcrypt.hashSync(password, salt) 
        });
        res.status(200).json(userDoc);
    } catch (error) {
        res.status(400).json(error)
    }
});

app.post('/login', async(req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    if(userDoc) {//if user info was found
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if(passOk) {
            jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json({
                    id: userDoc._id,
                    username,
                });
            });
        }
        else {
            res.status(400).json("Wrong credentials");
        }
    }
    else {
        res.status(400).json("Wrong credentials");
    }
});

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    if(token) {
        jwt.verify(token, secret, {}, (err, info) => {
            if(err) throw err;
            res.json(info);
        });
    }
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
});

app.listen(4000);
//