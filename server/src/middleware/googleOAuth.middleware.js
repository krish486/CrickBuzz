let GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
let env = require("../config/env")

let googleOAuthMiddleware = (app) => {


    app.use(passport.initialize())
    passport.use(new GoogleStrategy({
        clientID: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
        callbackURL: env.GOOGLE_CALLBACK
    },
        async (accessToken, refreshToken, profile, cb) => {

            return cb(null, profile);
        }
    ));
}

module.exports = googleOAuthMiddleware