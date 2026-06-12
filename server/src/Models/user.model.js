let mongoose = require("mongoose");
const ROLES = require("../constants/model.constants");


const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String, required: true },
        role: { type: String, enum: Object.values(ROLES), default: ROLES.SCORER },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
)

let userModel = mongoose.model("user", userSchema)

module.exports = userModel;