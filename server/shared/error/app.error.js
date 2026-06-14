//parent
export class AppError extends Error {
    constructor(message, statuscode, details = "") {
        supper(message);
        this.statuscode = statuscode;
        this.name = "App Error";
        this.details = details;
    }
}

