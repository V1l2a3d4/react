import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comments from "./component/Script";
class App extends Component {
	render() {
		return (
			<>	
				<Comments/>
			</>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);