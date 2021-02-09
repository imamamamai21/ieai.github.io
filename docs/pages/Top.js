import React, { Component } from 'react';

/**
 * @props : show Boolean
 */
export default class TopPage extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		if (!this.props.show) return <div />
		
		return (
			<div>
				<h1>Mai Shitntsu TOP</h1>
			</div>
		);
	}
}