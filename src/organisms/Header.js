import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Header.css';
import { MENU } from '../constants/Menu';

/**
 * @props : target {profile: Boolean, works: Boolean}
 */
export default class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
			menu: {
				profile: false,
				works: false
			}
		};
		console.log('Header::constructor: state =', this.state)
	}

	onClickMenu(key) {
		console.log('onClickMenu', key)
		var state = this.state.menu[key];
		if (state) return;

		this.setState({ menu: {
			profile: key === 'profile' && !state ? !state : state,
			works: key === 'works' && !state  ? !state : state
		}});
	}

	render() {
		return (
			<div className = 'header'>
				<h3>Mai Shitntsu logo</h3>
				<ul>{
						Object.keys(this.state.menu).map( (key, i) => {
							return (
								<li key={'headMenu' + key} data-switch={this.state.menu[key] ? 'on' : 'off'}>
									<Link to={'/' + key}>
										<input
											type='button' 
											value={MENU[key]}
											onClick={() => this.onClickMenu(key)} />
									</Link>
								</li>
							)
						})
				}</ul>
			</div>
		);
	}
}
