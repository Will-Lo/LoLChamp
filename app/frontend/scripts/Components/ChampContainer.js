import React from 'react';
import CSSModules from 'react-css-modules';
import ChampBox from './ChampBox';
import $ from 'jquery';

const ChampContainer = React.createClass ({
	
  propTypes:{
    url: React.PropTypes.string.isRequired //url for data.json
  },

  getInitialState: function(){
    return {
      icon1: 'ChampionSquare.png',
    };
  },

  handleIconChange: function(champion){
    $.ajax({
      url: this.props.url,
      type: 'GET',
      cache: false,
      success: function(data){
        let key = 0;
        let image = '';
        for (key in data.championData){
          //console.log(data.championData[key].championName);
          if (champion.toLowerCase() == data.championData[key].championName.toLowerCase()){
            image = data.championData[key].image;
          }
        }
        if (!image){
          return; //user input had no return
          //add some visible warning
        }
        else{
          console.log(image);
          this.setState ({
            icon1: image
          });
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render() {
		return(
			<ChampBox submit={this.handleIconChange} image={this.state.icon1}/>			
		);
	}
});

export default ChampContainer;