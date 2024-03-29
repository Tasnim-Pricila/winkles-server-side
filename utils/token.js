const jwt = require('jsonwebtoken');

exports.generateToken = (userInfo) => {
    const payload = {
        email: userInfo.email,
        role: userInfo.role
    }
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN, {
        expiresIn: '1d'
    })
    return token;
}