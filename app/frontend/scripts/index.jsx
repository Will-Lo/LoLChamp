import React from 'react';
import {render} from 'react-dom';
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import Test from './Components/Test.js'

const AppContainer = React.createClass({
	render() {
		return (
			<div classname="appcontainer">
				<ChampIcon />
				<InputBox />
				<Test />
			</div>
		);
	}
});

const TitleArea = React.createClass({
	render() {
		return(
			<div classname="titlearea">
				<Jumbotron>
					<Title />
				</Jumbotron>
			</div>
		);
	}
});

const Title = React.createClass({
	render(){
		return(
			<div classname="title">
				<h1>LoL Champion Suggestion</h1>
				<p>Input your team composition, and we'll suggest a champion for you! </p>
			</div>
		);
	}
})

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