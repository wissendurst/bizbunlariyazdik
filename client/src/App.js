import { useEffect } from "react";
import { connect } from "react-redux";

import Routes from "./components/Routes";
import { axi } from "./utils/config";
import { setLogin } from "./components/loginpage/loginAction";

function App(props) {
	useEffect(
		() => {
			axi("get", "/test")
				.then((res) => {
					if (res.status === "accepted") {
						props.setLogin(true);
					}
				})
				.catch(console.log);
		},
		//eslint-disable-next-line
		[]
	);
	return <Routes />;
}

export default connect(null, { setLogin })(App);
