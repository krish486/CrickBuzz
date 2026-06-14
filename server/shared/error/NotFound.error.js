import { StatusCodes } from "http-status-codes";

const { AppError } = require("./app.error");

export class NotFound extends AppError {
    constructor(message, details = "") {
        super(message, StatusCodes.NOT_FOUND, details);
    }
}