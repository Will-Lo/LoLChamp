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
  	return(
  		<img src="http://vignette2.wikia.nocookie.net/deck-heroes/images/7/78/Super_Teemo.png/revision/latest?cb=20150629120148" />
  		);
	}
}

class InputBox extends React.Component {
	render() {
		return (
			<form classname="inputbox"> 
				<input type="text" value="This should form"></input>
				<input type="submit" value="Get" />
			</form>
		);
	}
}

render(<AppContainer />, document.getElementById('content'));