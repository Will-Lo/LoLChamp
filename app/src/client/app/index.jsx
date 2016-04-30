import React from 'react';
import {render} from 'react-dom';

class AppContainer extends React.Component {
	render() {
		return (
			<div classname="appcontainer">
				<ChampIcon />
				<InputBox />
			</div>
		);
	}
}

class ChampIcon extends React.Component {
  render () {
    return (
    	<p> Hi </p>
    );
  }
}

class InputBox extends React.Component {
	render() {
		return (
			<form classname="inputbox"> 
				<input type="text">This should be a form </input>
				<input type="submit" value="Get" />
			</form>
		);
	}
}

render(<AppContainer />, document.getElementById('content'));