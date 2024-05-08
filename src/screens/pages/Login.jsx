import React from 'react';
import NavMain from './../../components/headers/NavMain';
import Footer from './../../components/Footer';
import { useNavigate } from 'react-router-dom';

function Login() {
	const navigate = useNavigate();
	function handleSubmit(e) {
		e.preventDefault();

		navigate('/home');
	}
	return (
		<React.Fragment>
			<NavMain />
			<br />
			<br />
			<br />
			<center>
				<div className="login">
					<form>
						<h2>Login</h2>
						<div className="input">
							<label htmlFor="email">Email: </label>
							<input type="email" id="email" />
						</div>
						<div className="input">
							<label htmlFor="password">Password: </label>
							<input type="password" id="password" />
						</div>
						<button onClick={handleSubmit}>Submit</button>
					</form>
				</div>
			</center>
			<Footer />
		</React.Fragment>
	);
}

export default Login;
