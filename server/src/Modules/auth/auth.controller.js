const AuthService = require("./auth.service")
const appConstants = require("../../constants/app.constants")
const env = require("../../config/env")

class AuthController {
    constructor() {
        this.userService = new AuthService()
    }
    async googleCallback(req, res) {
        let { accessToken, refreshToken } = this.userService.createUser(req.user)

        res.cookie("accessToken", accessToken, appConstants.cookie.accessConfig)

        res.cookie("refreshToken", refreshToken, appConstants.cookie.refreshConfig)

        res.redirect(env.CALLBACK_URL,)
    }
}

module.exports = AuthController