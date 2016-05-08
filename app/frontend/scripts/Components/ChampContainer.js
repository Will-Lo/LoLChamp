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
      iconTop: '',
      iconMid: '',
      iconJungle: '',
      iconADC: '',
      iconSupport: ''
    };
  },

  handleIconChange: function(champion){
    $.ajax({
      url: this.props.url,
      type: 'GET',
      cache: false,
      async: false,
      success: function(data){
        console.log(this.props.url);
      },
      //   const len = data.length;
      //   for (i = 0; i < len; i++ ){
      //     if (champion.toLowerCase() == data['championName'[i]].toLowerCase()){
      //       console.log("yay");
        //   }
        // }
      // }
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render() {
		return(
			<ChampBox submit={this.handleIconChange}/>			
		);
	}
});

export default ChampContainer;