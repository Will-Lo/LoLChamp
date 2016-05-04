import React from 'react';
import {render} from 'react-dom';
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import Test from './Components/Test.js';
import Title from './Components/Title.js';

const AppContainer = React.createClass({
	render() {
		return (
			<div classname="appcontainer">
				<Title />
				<ChampIcon />
				<InputBox />
				<Test />
			</div>
		);
	}
});

const ChampIcon = React.createClass({
  render () {
  	return(
  		<img src="http://vignette2.wikia.nocookie.net/deck-heroes/images/7/78/Super_Teemo.png/revision/latest?cb=20150629120148" />
  		);
	}
});

const InputBox = React.createClass({
	render() {
		return (
			<form classname="inputbox"> 
				<input type="text" value="This is some sort of input"></input>
				<input type="submit" value="Get" />
			</form>
		);
	}
});

render(<AppContainer />, document.getElementById('content'));