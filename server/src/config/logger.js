let pino = require("pino")
let env = require("../config/env")

let logger = pino({
    level: env.LOGGER_LEVEL,
    transport: {
        target: "pino-pretty"
    }
})

module.exports = logger