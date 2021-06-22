import { useRef, useState } from "react";
import { Redirect } from "react-router-dom";

import { axi } from "../../utils/config";

function SignupPage() {
	const nameRef = useRef("");
	const passRef = useRef("");
	const emailRef = useRef("");

	const [state, setState] = useState(false);

	const submit = (e) => {
		e.preventDefault();
		axi("post", "signup", {
			id: Date.now(),
			name: nameRef.current.value,
			password: passRef.current.value,
			email: emailRef.current.value,
		})
			.then((res) => {
				if (res.status === "accepted") setState(true);
			})
			.catch(console.log);
	};
	if (state) return <Redirect to="/login" />;
	return (
		<>
			SignupPage
			<form>
				<label htmlFor="name">name: </label>
				<input type="text" id="name" ref={nameRef} />
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

export default SignupPage;
