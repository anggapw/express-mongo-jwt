const passport = require('passport');
require('dotenv').config()
const Users = require('../Models/Users');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
var GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = {
    strategies: () => {
        passport.use("jwt", new JwtStrategy(
            {
                jwtFromRequest: ExtractJwt.fromExtractors([
                    ExtractJwt.fromUrlQueryParameter('secret_token'),
                    ExtractJwt.fromHeader('secret_token'),
                    ExtractJwt.fromAuthHeaderAsBearerToken(),
                ]),
                secretOrKey: process.env.SECRET_KEY_TOKEN
            },
            async (jwt_payload, done) => {
                try {
                    const user = await Users.findOne({ email: jwt_payload.email });

                    if (!user) {
                        return done(err, false, { message: "User not found" })
                    } else {
                        return done(null, user)
                    }
                }
                catch (error) {
                    console.log(error)
                    res.status(500).json({
                        message: "internal server error",
                    })
                }
            }
        )
        )
        passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL_GOOGLE

        },
            function (accessToken, refreshToken, profile, cb) {
                //   console.log(profile)
                Users.findOrCreate({ providerId: profile.id, provider: profile.provider, fullName: profile.displayName, email: profile.emails[0].value }, function (err, user) {
                    return cb(err, user);
                });
            }
        )),
            passport.serializeUser(function (user, done) {
                done(null, user.id);
            });

        passport.deserializeUser(function (id, done) {
            User.findById(id, function (err, user) {
                done(err, user);
            });
        });
    }
}