import React from 'react';
import {render} from 'react-dom';
import Test from './Components/Test.js';
import Title from './Components/Title.js';
import ChampBox from './Components/ChampBox.js';

class AppContainer extends React.Component{
	render() {
		return (
			<div classname="appcontainer">
				<Title />
				<ChampBox />
				<Test />
			</div>
		);
	}
}

render(<AppContainer />, document.getElementById('content'));