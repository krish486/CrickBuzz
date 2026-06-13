
class AuthController {
    constructor() { }
    async googleCallback(req, res) {
        console.log("data==>", req.user)
    }
}

module.exports = AuthController