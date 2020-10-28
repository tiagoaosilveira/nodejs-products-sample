const authService = require('../services/auth');

exports.login = (req, res) => {
    let authData = authService.auth(req.body.user, req.body.pwd);
    if (authData.auth) {
      res.json(authData);
    } else {
      res.status(500).json({message: 'Invalid Login'});
    }
}