import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/ChampIcon.css';

class ChampIcon extends React.Component{
	render(){
		return(
			<img src="http://vignette2.wikia.nocookie.net/deck-heroes/images/7/78/Super_Teemo.png/revision/latest?cb=20150629120148" />
		);
	}
}

export default CSSModules(ChampIcon, styles);