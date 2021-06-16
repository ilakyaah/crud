import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { useHistory } from 'react-router-dom';
import './style.css';

const LoginForm = (props) => {
	const history = useHistory();
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const setLogin = useStoreActions((state) => state.login.setLogin);

	const handleLogin = () => {
		const data = {
			user: user,
			password: password,
		};
		if (data.user == 'Ilakyaah' && data.password == '123456') {
			setLogin(data);
			history.push('/home');
		} else {
			alert('Invalid user');
		}
	};

	return (
		<div className="container login-wrapper card-1">
			<h2>Please LogIn</h2>
			<form className="mt-3">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						User Name
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter username"
						value={user}
						onChange={(e) => setUser(e.target.value)}
						style={{ width: '400px' }}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						type="password"
						placeholder="Enter password"
						className="form-control"
						id="exampleInputPassword1"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						style={{ width: '400px' }}
					/>
				</div>

				<button type="submit" class="btn btn-primary" onClick={handleLogin}>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
