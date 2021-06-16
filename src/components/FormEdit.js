import React, { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Navbar from './Navbar';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const FormEdit = (props) => {
	const { id, index } = useParams();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const forms = useStoreState((state) => state.forms.forms);
	const setForms = useStoreActions((action) => action.forms.set);

	const findById = (id) => {
		for (var i = 0; i < forms.length; i++) {
			if (forms[i].id == id) {
				return forms[i];
			}
		}
	};

	const onUpdate = () => {
		var form = {
			id: parseInt(id),
			name: name,
			email: email,
			password: password,
		};
		var temp = [...forms];
		temp[index] = form;
		setForms(temp);
		clear();
		history.push('/home');
	};
	const clear = () => {
		setName('');
		setEmail('');
		setPassword('');
	};

	useEffect(() => {
		let edit = findById(id);
		setName(edit.name);
		setEmail(edit.email);
		setPassword(edit.password);
	}, []);

	return (
		<div>
			<Navbar />
			<div className="login-wrapper container">
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

					<button className="btn btn-primary" type="button" onClick={onUpdate}>
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default FormEdit;
