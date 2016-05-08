import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/ChampIcon.css';

const ChampIcon = React.createClass({
	propTypes:{
    image: React.PropTypes.string
  },

  getInitialState: function(){
    return {
      image: '/scripts/Components/ChampIcons/ChampionSquare.png'
    }
  },

  render(){
		return(
			<img src={this.props.image} />
		);
	}
});

export default CSSModules(ChampIcon, styles);