import React, { Component } from 'react';

class Form extends Component {
	state = {
		urlInput: ''
	};

	render() {
		return (
			<form>
				<label htmlFor="urlInput" />
				<input
					id="urlInput"
					type="text"
					value={this.state.urlInput}
					onChange={this.handleChange}
				/>
				<button>Check URL</button>
			</form>
		);
	}

	handleChange = event => {
		const { id, value } = event.target;
		this.setState({ [id]: value });
	};
}

export default Form;
