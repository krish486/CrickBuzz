let { Router } = require("express")
const passport = require("passport")
const AuthController = require("./auth.controller")

let routes = Router()

let authController = new AuthController();


routes.get("/google", passport.authenticate('google', { scope: ['profile', 'email'], prompt: "select_accout" },))


app.get('/google/callback',
    passport.authenticate('google', { session: false }),
    authController.googleCallback.bind(authController)
);


module.exports = routes