const mongoose = require("mongoose");

const PORT = 4004;
const ORIGIN = "http://localhost:3000";
const WHITE_LIST = ["/login", "/signup"];

const SECRET = "sadg0sd87g6asd8976gh9asd8hasdhasd89h58asd75h";
const CORS_OPT = { credentials: true, origin: ORIGIN };
const SESSION_OPT = {
	secret: "Keep it secret, keep it safe",
	resave: true,
	saveUninitialized: true,
};

const DB_NAME = "aven";
const DB_COLLECTION = "test";
const DB_PASSWORD = "parola";
const DB_URL = `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@cluster0.zoi2e.mongodb.net/${DB_COLLECTION}?retryWrites=true&w=majority`;
const DB_OPT = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
};
const DB_CONNECT = mongoose
	.connect(DB_URL, DB_OPT)
	.then(() => {
		console.log(`server start on localhost:${PORT}`);
		console.log("DB Connected");
	})
	.catch((err) => console.log("DB Connection Error", err));

module.exports = {
	PORT,
	DB_CONNECT,
	WHITE_LIST,
	CORS_OPT,
	SESSION_OPT,
	SECRET,
};
