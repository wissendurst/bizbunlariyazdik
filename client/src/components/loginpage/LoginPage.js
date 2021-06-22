import { useRef } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { axi } from "../../utils/config";
import { setLogin } from "./loginAction";

function LoginPage(props) {
	const passRef = useRef("");
	const emailRef = useRef("");

	const submit = (e) => {
		e.preventDefault();
		axi("post", "/login", {
			password: passRef.current.value,
			email: emailRef.current.value,
		})
			.then((res) => {
				if (res.status === "accepted") {
					props.setLogin(true);
				}
			})
			.catch(console.log);
	};

	if (props.isLogin) return <Redirect to="/" />;

	return (
		<>
			LoginPage
			<form>
				<label htmlFor="email">email: </label>
				<input type="email" id="email" ref={emailRef} />
				<label htmlFor="password">password: </label>
				<input type="password" id="password" ref={passRef} />
				<button type="submit" onClick={(e) => submit(e)}>
					submit
				</button>
			</form>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		isLogin: state.isLogin,
	};
};

export default connect(mapStateToProps, { setLogin })(LoginPage);
