import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { useHistory } from 'react-router';
import Navbar from './Navbar';

const getUniqueID = () => {
	return new Date().getTime();
};

const FormAdd = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const save = useStoreActions((action) => action.forms.add);

	const onSave = () => {
		var form = {
			id: getUniqueID(),
			name: name,
			email: email,
			password: password,
		};
		clear();
		save(form);
		history.push('/home');
	};
	const clear = () => {
		setName('');
		setEmail('');
		setPassword('');
	};
	return (
		<div>
			<Navbar />
			<div className="login-wrapper container" style={{ border: 'none' }}>
				<form>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							placeholder="Name"
							onChange={(e) => setName(e.target.value)}
							value={name}
							style={{ width: '400px' }}
						/>
					</div>
					<div className="mb-3">
						<label for="exampleInputPassword1" class="form-label">
							Email Address
						</label>
						<input
							type="text"
							className="form-control"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							style={{ width: '400px' }}
						/>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							style={{ width: '400px' }}
						/>
					</div>

					<button className="btn btn-primary" type="button" onClick={onSave}>
						Save
					</button>
				</form>
			</div>
		</div>
	);
};

export default FormAdd;
