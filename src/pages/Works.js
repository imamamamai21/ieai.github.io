import React, { Component } from 'react';

/**
 * @props : show Boolean
 */
export default class WorksPage extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		if(!this.props.show) return <div />
		return (
			<div id = 'worksPage'>
				<h1>WORKS!!</h1>
			</div>
		);
	}
}