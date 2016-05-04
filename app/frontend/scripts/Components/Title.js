import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/Title.css';
import {Jumbotron} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class Title extends React.Component {
	render(){
		return(
			<div styleName='titleArea'>
				<Jumbotron>
					<Grid>	
						<Row>
						<Col sm={1} md={2} />
						<Col sm={10} md={8}>
							<h1>LoL Champion Suggestion</h1>
							<p>Input your team composition, and we'll suggest a champion for you! </p>
						</Col>
						<Col sm={1} md={2} />
						</Row>
					</Grid>
				</Jumbotron>
			</div>
		);
	}
}

export default CSSModules(Title, styles);