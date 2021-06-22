import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { axi } from "../../utils/config";
import { setLogin } from "../loginpage/loginAction";

function LogoutPage(props) {
	useEffect(
		() => {
			axi("get", "/logout")
				.then((res) => {
					if (res.status === "accepted") {
						props.setLogin(false);
					}
				})
				.catch(console.log);
		},
		//eslint-disable-next-line
		[]
	);
	if (!props.isLogin) return <Redirect to="/login" />;
	return <></>;
}

const mapStateToProps = (state) => {
	return {
		isLogin: state.isLogin,
	};
};

export default connect(mapStateToProps, { setLogin })(LogoutPage);
