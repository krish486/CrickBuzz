const userModel = require("../Models/user.model");

class UserRepo {
    async create(payload) {
        await userModel.create(payload);
    }
    async findByEmail(email) {
        await userModel.findOne({ email })
    }
    async findById(id) {
        await userModel.findById(id)
    }
}

module.exports = UserRepo