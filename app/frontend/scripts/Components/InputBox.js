import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/InputBox.css';

class InputBox extends React.Component {
	render(){
		return(
			<form classname="inputbox"> 
				<input type="text" value="This is some sort of input"></input>
				<input type="submit" value="Get" />
			</form>
		);
	}
}

export default CSSModules(InputBox, styles);