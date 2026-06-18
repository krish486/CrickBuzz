const AuthService = require("./auth.service")
const env = require("../../../config/env")
const appConstants = require("../../../constants/app.constants")
const { NotFound } = require("../../../shared/error/NotFound.error")

class AuthController {
    constructor() {
        this.authService = new AuthService()
    }
    async googleCallback(req, res) {
        let { accessToken, refreshToken } = await this.authService.createUser(req.user)

        res.cookie("accessToken", accessToken, appConstants.cookie.accessConfig)

        res.cookie("refreshToken", refreshToken, appConstants.cookie.refreshConfig)

        res.redirect(env.CALLBACK_URL)
    }
    async refreshTokenController(req, res) {
        let refreshToken = req.cookies.refreshToken
        const { accessToken } = this.authService.refreshTokenService(refreshToken);

        res.cookie("accessToken", accessToken, appConstants.cookie.accessConfig)

        return res.status(200).json({
            success: true,
        })
    }
}

module.exports = AuthController