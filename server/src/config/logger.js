let pino = require("pino")

let logger = pino({
    level: "info",
    transport: {
        target: "pino-pretty"
    }
})

module.exports = logger