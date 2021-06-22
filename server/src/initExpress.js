const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const { PORT, DB_CONNECT, SESSION_OPT, CORS_OPT } = require("./config");

const initExpress = () => {
	const server = express();

	server.use(express.json());
	server.use(cookieParser());
	server.use(cors(CORS_OPT));
	server.use(session(SESSION_OPT));
	server.listen(PORT, DB_CONNECT);

	return server;
};

module.exports = initExpress;
