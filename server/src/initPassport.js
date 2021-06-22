const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");

const User = require("./models/user");
const { WHITE_LIST, SECRET } = require("./config");

const initPassport = (server) => {
	server.use(passport.initialize());
	server.use(passport.session());
	server.use((req, res, next) => {
		if (req.isAuthenticated()) next();
		else if (WHITE_LIST.includes(req.url)) next();
		else res.status(401).send("Unauthorized");
	});

	passport.deserializeUser((user, done) => {
		User.findOne(user, (err, user) => {
			return done(err, user);
		});
	});
	passport.serializeUser((user, done) => {
		return done(null, user);
	});
	passport.use(
		new LocalStrategy(
			{ usernameField: "email", passwordField: "password" },
			(email, password, done) => {
				jwt.sign(password, SECRET, (err, token) => {
					if (err) return console.log("jwt verify error:", err);
					User.findOne({ email: email, password: token }, (err, user) => {
						if (err) {
							return done(err);
						}
						if (!user) {
							return done(null, false, { message: "Incorrect email." });
						}
						return done(null, user);
					});
				});
			}
		)
	);
};

module.exports = initPassport;
