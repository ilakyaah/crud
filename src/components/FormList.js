import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Navbar from './Navbar';

const FormList = (props) => {
	const forms = useStoreState((state) => state.forms.forms);
	const setForms = useStoreActions((action) => action.forms.set);
	const remove = useStoreActions((action) => action.forms.remove);

	const onRemove = (index) => {
		remove(index);
	};
	return (
		<div>
			<Navbar />
			<div style={{ padding: '5rem', margin: '5rem' }}>
				<Link to="/add">
					<button className="btn btn-primary" style={{ float: 'right' }}>
						Add
					</button>
				</Link>
				{forms.length > 0 && (
					<table className="table-hover table">
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Email</th>
								<th>Password</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{forms &&
								forms.map((form, index) => {
									return (
										<tr key={index}>
											<td>{form.id}</td>
											<td>{form.name}</td>
											<td>{form.email}</td>
											<td>{form.password}</td>
											<td>
												<Link to={'/edit/' + form.id + '/' + index}>
													<button className="btn">
														<span className="material-icons">edit</span>
													</button>
												</Link>
												<button className="btn">
													<span className="material-icons" onClick={() => onRemove(index)}>
														delete
													</span>
												</button>
											</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				)}
			</div>
			{forms.length <= 0 && <h1 style={{ textAlign: 'center' }}>No records found</h1>}
		</div>
	);
};

export default FormList;
