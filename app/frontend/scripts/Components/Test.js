import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/Test.css';


class Test extends React.Component {
	render() {
		return (
			<div styleName='testcontainer'>
				<p>Test</p>
			</div>
		);
	}
}

export default CSSModules(Test, styles);