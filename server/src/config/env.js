require("dotenv").config();
let zod = require("zod")
let appConstants = require("../constants/app.constants")

let envSchema = zod.object({
    PORT: zod.coerce.number().default(appConstants.PORT),
    MONGO_URL: zod.string().default(appConstants.MONGO_URL),
    NODE_ENV: zod.string().default(appConstants.NODE_ENV),
    LOGGER_LEVEL: zod.string().default(appConstants.LOGGER_LEVEL),
    CORS_ORIGIN: zod.string(),
    GOOGLE_CALLBACK: zod.string(),
    GOOGLE_CLIENT_ID: zod.string(),
    GOOGLE_CLIENT_SECRET: zod.string(),
    ACCESS_SECRET: zod.string(),
    REFRESH_SECRET: zod.string(),
    CALLBACK_URL: zod.string()
})

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.log("check your env's")
}
let parsedData = parsed.data
module.exports = parsedData 