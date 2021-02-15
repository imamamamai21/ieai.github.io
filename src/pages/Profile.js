import React, { Component } from 'react';

import SelfIntroduction from '../organisms/SelfIntroduction';
import Header from '../organisms/Header';

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
				<Header />
				<SelfIntroduction />
			</div>
		);
	}
}
