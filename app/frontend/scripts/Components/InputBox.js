import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/InputBox.css';

const InputBox = React.createClass ({

	getInitialState: function() {
		return {
			value: "Input a champion"
		};
	},

	handleChange: function(e){
		this.setState({
			value: e.target.value
		});
	},

	handleEnter: function(e){
		if (e.keyCode == 13) {
			e.preventDefault();
			let champion = this.state.value.trim();
			this.setState({value: ''});
			return this.props.handleEnter(champion);
		}	
	},

	render(){
		return(
			<form classname="inputbox"> 
				<input type="text" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleEnter}></input>
			</form>
		);
	}
});

export default CSSModules(InputBox, styles);