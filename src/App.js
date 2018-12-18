import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Data from './components/Data';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Form />
				<Data />
			</div>
		);
	}
}

export default App;
