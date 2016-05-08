import React from 'react';
import {render} from 'react-dom';
import Test from './Components/Test.js';
import Title from './Components/Title.js';
import ChampContainer from './Components/ChampContainer.js';

class AppContainer extends React.Component{
	render() {
		return (
			<div classname="appcontainer">
				<Title />
				<ChampContainer url='/scripts/data.json' />
				<Test />
			</div>
		);
	}
}

render(<AppContainer />, document.getElementById('content'));