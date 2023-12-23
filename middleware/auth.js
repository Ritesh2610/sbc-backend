const jwt = require('jsonwebtoken');

const secret = "test";

const auth = async (req, res, next) => {
    const { token } = req.headers;
    console.log(token);
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Missing token' });
    }

    jwt.verify(token, secret, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden - Invalid token' });
        }

        req.user = user;
        next();
    });
};

module.exports = auth;
