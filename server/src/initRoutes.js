const passportRouter = require("./routes/passportRouter");

const initRoutes = (server) => {
	server.use("/", (req, res, next) => {
		console.log("req on:", req.url, "payload:", req.body);
		next();
	});
	server.use("/", passportRouter);
};
module.exports = initRoutes;
