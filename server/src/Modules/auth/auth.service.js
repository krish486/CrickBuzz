let UserRepo = require("../../repository/user.repository")
let jwt = require("jsonwebtoken")
let env = require("../../config/env")

class AuthService {
    constructor() {
        this.userRepo = new UserRepo();
    }

    async createUser(user) {
        const existUser = this.userRepo.findByEmail(user.emails[0].value)
        let result = existUser

        if (!existUser) {
            const _user = await this.userRepo.create({
                name: user.displayName,
                picture: user.photos[0].value,
                email: user.emails[0].value
            })
            result = _user
        }

        const data = {
            id: result._id,
            email: result.email,
            name: result.name,
            picture: result.picture,
        }

        const refreshToken = jwt.sign(data, env.REFRESH_SECRET, { expiresIn: "30D" })
        const accessToken = jwt.sign(data, env.ACCESS_SECRET, { expiresIn: "1H" })

        return { accessToken, refreshToken }
    }
}

module.exports = AuthService