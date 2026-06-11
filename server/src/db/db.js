const { default: mongoose } = require("mongoose")
let env = require("../config/env");
const logger = require("../config/logger");

let connectDB = async () => {
    await mongoose.connect(env.MONGO_URL);
    logger.info("mongodb connected")
}

module.exports = connectDB;