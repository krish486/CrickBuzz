const jwt = require("jsonwebtoken");
const env = require("../config/env");
const { unAuthorize } = require("../shared/error/unAuthorize.error");

const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.accessToken;

        let payload = jwt.verify(token, env.ACCESS_SECRET)

        req.user = payload;
        next()
    }
    catch (err) {
        throw new unAuthorize("token not found")
    }
}

const authorizationMiddleware = (req, res, next) => {
    if (req.user.role === "ADMIN" || req.user.role === "SUPER_ADMIN") {
        next();
    }
    else {
        throw new unAuthorize("invalid role")
    }
}

module.exports = { authMiddleware, authorizationMiddleware }