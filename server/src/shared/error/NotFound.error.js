let { StatusCodes } = require("http-status-codes")

const { AppError } = require("./app.error");

class NotFound extends AppError {
    constructor(message, details = "") {
        super(message, StatusCodes.NOT_FOUND, details);
    }
}

module.exports = { NotFound }