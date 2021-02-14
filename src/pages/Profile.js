import React, { Component } from 'react';

import SelfIntroduction from '../organisms/SelfIntroduction';

/**
 * @props : show Boolean
 */
export default class ProfilePage extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div id='profilePage'>
				<SelfIntroduction />
			</div>
		);
	}
}
