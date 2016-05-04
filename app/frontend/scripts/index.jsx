import React from 'react';
import {render} from 'react-dom';
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import Test from './Components/Test.js';
import Title from './Components/Title.js';
import ChampIcon from './Components/ChampIcon.js';
import InputBox from './Components/InputBox.js';

class AppContainer extends React.Component{
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
}

render(<AppContainer />, document.getElementById('content'));