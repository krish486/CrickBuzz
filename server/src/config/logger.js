let pino = require("pino")

pino({
    level: "info",
    transport: {
        target: "pino-pretty"
    }
})

module.exports = pino