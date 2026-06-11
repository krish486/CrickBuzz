const createApp = require("./src/app");


let startServer = () => {
    let app = createApp();

    app.listen(3000, () => {
        console.log("sever is running on port 3000")
    })
}

startServer()