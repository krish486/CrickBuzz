const createApp = require("./src/app");
const env = require("./src/config/env");
const logger = require("./src/config/logger")
console.log("logger", logger)
let startServer = () => {
    let app = createApp();

    app.listen(env.PORT, () => {
        logger.info({ port: env.PORT }, "server running")
    })
}

startServer()