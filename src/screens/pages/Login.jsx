import React, { useState } from 'react';
import NavMain from './../../components/headers/NavMain';
import Footer from './../../components/Footer';
import { useNavigate } from 'react-router-dom';

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	function handleSubmit(e) {
		e.preventDefault();

		if (email === 'indjikeaurelie@gmail.com' && password === 'aurelie123') {
			localStorage.setItem('user', JSON.stringify({ email, password }));
			navigate('/dashboard');
		} else {
			alert('Wrong details provided, please try again!!');
		}
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
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="input">
							<label htmlFor="password">Password: </label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
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
