const jwt = require('jsonwebtoken');

exports.auth = (user, pwd) => {
    if(user === 'tiago' && pwd === '123'){
        const id = 1;
        const role = "ROLE_ADMIN";
        var token = jwt.sign({ id, role }, process.env.SECRET, {
        expiresIn: 604800 // expires in 5min
        });
        return { 
            auth: true, 
            token: token 
        };
    }
    return { 
        auth: false,
        token: ''
    }
}