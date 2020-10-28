const jwt = require('jsonwebtoken');

exports.verifyJWT = (req, res, next) => {
    var token = req.headers['authorization'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token.slice(7, token.length), process.env.SECRET, function(err, decoded) {
      if (err) return res.status(403).json({ auth: false, message: 'Failed to authenticate token.' });
      // If everything is ok, save to use in the next request
      req.userId = decoded.id;
      next();
    });
}