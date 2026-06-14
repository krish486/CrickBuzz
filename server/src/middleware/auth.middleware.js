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