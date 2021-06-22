import axios from "axios";

const instance = new axios.create({
	baseURL: "http://localhost:4004",
	withCredentials: "true",
	headers: { "content-type": "application/json" },
});

export const axi = (method, url, arg) => {
	return new Promise((resolve, reject) => {
		instance[method](url, arg)
			.then((res) => resolve(res.data))
			.catch((err) => reject(err));
	});
};

export const initialState = {
	isLogin: false,
};
