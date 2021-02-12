import React, { Component } from 'react';

import SelfIntroduction from '../organisms/SelfIntroduction';

/**
 * @props : show Boolean
 */
export default class ProfilePage extends Component {
	constructor (props) {
		super(props);
		this.state = {
			show: props.show
		};
	}

	render() {
		if(!this.props.show) return <div />;

		return (
			<div id='profilePage'>
				<SelfIntroduction />
			</div>
		);
	}
}
