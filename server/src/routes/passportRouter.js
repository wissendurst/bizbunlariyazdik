const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/user");
const { SECRET } = require("../config");

router.post("/login", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) {
			console.log("/login err:", err);
			return next(err);
		}
		if (!user) {
			console.log("/login user err:", err);
			return next(err);
		}
		req.logIn(user, (err) => {
			if (err) return next(err);
			res.status(200).send({ status: "accepted" });
			console.log("req.user", req.user);
		});
	})(req, res, next);
});

router.get("/logout", (req, res, next) => {
	req.logout();
	res.status(200).send({ status: "accepted" });
});

router.post("/signup", (req, res) => {
	User.findOne({ email: req.body.email })
		.then((result) => {
			if (result) {
				console.log("user already subscribed", result);
				return res.status(200).send({
					status: "rejected",
					info: "user already subscribed",
					response: result,
				});
			}
			jwt.sign(req.body.password, SECRET, (err, token) => {
				if (err)
					return res
						.status(500)
						.send({ status: "error", info: "jwt sign error", response: err });

				const user = new User({
					id: req.body.id,
					username: req.body.name,
					password: token,
					email: req.body.email,
				})
					.save()
					.then((result) => {
						console.log("user subscribed", result);
						res.status(200).send({
							status: "accepted",
							info: "user subscribed",
							response: result,
						});
					})
					.catch((err) => {
						console.log("user subscription error", err);
						res.status(500).send(err);
					});
			});
		})
		.catch((err) => {
			console.log("DB findOne error", err);
			res.status(500).send({
				status: "error",
				info: "DB findOne user error",
				response: err,
			});
		});
});

router.get("/test", (req, res) => {
	res.status(200).send({ status: "accepted" });
});

module.exports = router;
