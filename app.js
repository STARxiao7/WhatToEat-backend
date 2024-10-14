var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const axios = require('axios')
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

var indexRouter = require('./routes/index');
const guestLogin = require('./routes/guestLogin')
const user = require('./routes/users')
const getUser = require('./routes/getUser')
const randomMenu = require('./routes/randomMenu')
const addMenu = require('./routes/addMenu')
const communityList = require('./routes/communityList')
const register = require('./routes/register')
const login = require('./routes/login')
const personalMenu = require('./routes/personalMenu')
const deleteMenu = require('./routes/deleteMenu')
const typeList = require('./routes/typeList')

var app = express();

const secretKey = 'match280961'

app.set('secretKey', secretKey)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressJWT({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/apiG\//] }))
app.use('/test', user)

app.use('/apiG/guestLogin', guestLogin)
app.use('/api/getUser', getUser)
app.use('/api/randomMenu', randomMenu)
app.use('/api/addMenu', addMenu)
app.use('/apiG/communityList', communityList)
app.use('/apiG/register', register)
app.use('/apiG/login', login)
app.use('/api/personalMenu', personalMenu)
app.use('/api/deleteMenu', deleteMenu)
app.use('/apiG/typeList', typeList)

app.use((err, req, res, next) => {
    //'UnauthorizedError'.如果捕获了前面这个字段的错误，则说明时token解析发生了错误
    if (err.name === 'UnauthorizedError') {
        res.status(401)
        res.send({ status: 401, msg: '无效的token' })
    } else {
        console.log(err.message)
        res.status(500)
        res.send({
            status: 500,
            msg: '发生未知错误'
        })
    }
})

// 监听端口，使用 Railway 提供的 PORT 环境变量或默认 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
