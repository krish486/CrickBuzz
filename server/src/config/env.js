require("dotenv").config();
let zod = require("zod")

let envSchema = zod.object({
    PORT: zod.coerce.number(),
    MONGO_URL: zod.string()
})

const parsed = envSchema.parse(process.env);

if (!parsed.success) {
    console.log("check your env's")
}
let parsedData = parsed.data
module.exports = parsedData 