import React from 'react';
import CSSModules from 'react-css-modules';
import ChampIcon from './ChampIcon';
import InputBox from './InputBox';

const ChampBox = React.createClass({
	
	Submit: function(champion) {
	console.log(champion);
	},

	render() {
		return (
			<div>
				<InputBox handleEnter={this.Submit}/>
				<ChampIcon />
			</div>
		);
	}
});

export default CSSModules(ChampBox);