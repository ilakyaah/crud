import React from 'react';
import { StoreProvider, action, createStore, persist, computed } from 'easy-peasy';
import Routes from './routers/Routes';

const formModal = persist({
	forms: [],
	add: action((state, form) => {
		state.forms.push(form);
	}),
	set: action((state, data) => {
		state.forms = data;
	}),
	remove: action((state, index) => {
		state.forms.splice(index, 1);
	}),
});

const loginModal = persist({
	user: null,
	isLoggedIn: computed((state) => state.user != null),

	setLogin: action((state, userdata) => {
		state.user = userdata;
	}),

	setLogout: action((state) => {
		state.user = null;
	}),
});

const storeModel = {
	forms: formModal,
	login: loginModal,
};

const store = createStore(storeModel);

function App() {
	return (
		<StoreProvider store={store}>
			<Routes />
		</StoreProvider>
	);
}

export default App;
