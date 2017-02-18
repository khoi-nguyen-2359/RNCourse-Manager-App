import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyBOcFr_aYGhIp34SZb9x_wc4YMaUcfKwGk',
			authDomain: 'rncourse-managerapp.firebaseapp.com',
			databaseURL: 'https://rncourse-managerapp.firebaseio.com',
			storageBucket: 'rncourse-managerapp.appspot.com',
			messagingSenderId: '457675193853'
		};

		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
