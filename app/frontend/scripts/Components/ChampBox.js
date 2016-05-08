import React from 'react';
import CSSModules from 'react-css-modules';
import ChampIcon from './ChampIcon';
import InputBox from './InputBox';

const ChampBox = React.createClass({
	
	submit: function(champion) {
		console.log(champion);
		return this.props.submit(champion)
	},

	render() {
		return (
			<div>
				<InputBox handleEnter={this.submit}/>
				<ChampIcon />
			</div>
		);
	}
});

export default CSSModules(ChampBox);