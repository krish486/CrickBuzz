const userModel = require("../Models/user.model");

class UserRepo {
    async create(payload) {
        await userModel.create(payload);
    }
    async findByEmail(email) {
        await userModel.findOne({ email }).lean()
    }
    async findById(id) {
        await userModel.findById(id).lean()
    }
}

module.exports = UserRepo