const createApp = require("./src/app");
const env = require("./src/config/env")

let startServer = () => {
    let app = createApp();

    app.listen(env.PORT, () => {
        console.log("sever is running on port 3000")
    })
}

startServer()