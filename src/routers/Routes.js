import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
import FormAdd from '../components/FormAdd';
import FormList from '../components/FormList';
import FormEdit from '../components/FormEdit';
import LoginForm from '../components/LoginForm';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LoginForm} exact />
				<Route path="/home" component={FormList} exact />
				<Route path="/add" component={FormAdd} exact />
				<Route path="/edit/:id/:index" component={FormEdit} exact />
			</Switch>
		</Router>
	);
};
export default Routes;
