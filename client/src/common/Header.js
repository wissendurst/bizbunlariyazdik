import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import HomePage from "../components/HomePage";
// import SignupPage from "../components/SignupPage";
// import LoginPage from "../components/loginpage/LoginPage";

function Header(props) {
	if (props.isLogin)
		return (
			<>
				<Link to="/">HomePage</Link>
				<Link to="/logout">Logout</Link>
				<br />
			</>
		);
	return (
		<>
			<Link to="/">HomePage</Link>
			<Link to="/signup">SignupPage</Link>
			<Link to="/login">LoginPage</Link>
			<br />
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		isLogin: state.isLogin,
	};
};

export default connect(mapStateToProps)(Header);
