import { Component } from "react";

import Header from "components/Header";

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				{this.props.children}
			</div>
		);
	}
}
