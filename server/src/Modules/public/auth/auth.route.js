let { Router } = require("express")
const passport = require("passport")
const AuthController = require("./auth.controller");
const { asyncHandler } = require("../../../shared/AsyncHandler");

let routes = Router()

let authController = new AuthController();


routes.get("/google", (req, res, next) => {
    console.log("GOOGLE ROUTE HIT");
    next();
}, passport.authenticate('google', { scope: ['profile', 'email'], prompt: "select_account" }))

routes.get("/check", (req, res) => {
    res.send("Auth Route Working");
});

routes.get('/google/callback',
    passport.authenticate('google', { session: false }),
    asyncHandler(authController.googleCallback.bind(authController))
);


module.exports = routes