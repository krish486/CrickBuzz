const { AppError } = require("./app.error");
const { StatusCodes } = require("http-status-codes")

export class unAuthorize extends AppError {
    constructor(message, details = "") {
        super(message, StatusCodes.UNAUTHORIZED, details);
    }
}