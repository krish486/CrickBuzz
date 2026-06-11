const createApp = require("./src/app");
const env = require("./src/config/env");
const logger = require("./src/config/logger");
const connectDB = require("./src/db/db");

let startServer = () => {
    let app = createApp();

    connectDB().then(() => {
        app.listen(env.PORT, () => {
            logger.info({ port: env.PORT }, "server running")
        })
    }).catch((err) => {
        logger.error({ error: err }, "error in server")
    })
}

startServer()