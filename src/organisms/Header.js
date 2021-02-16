// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import './Header.css';

/**
 * @props : target {profile: Boolean, works: Boolean}
 */
// export default class Header extends Component {
// 	constructor (props) {
// 		super(props);
// 		this.state = {
// 			menu: {
// 				profile: false,
// 				works: false
// 			}
// 		};
// 		console.log('Header::constructor: state =', this.state)
// 	}

// 	onClickMenu(key) {
// 		console.log('onClickMenu', key)
// 		var state = this.state.menu[key];
// 		if (state) return;

// 		this.setState({ menu: {
// 			profile: key === 'profile' && !state ? !state : state,
// 			works: key === 'works' && !state  ? !state : state
// 		}});
// 	}

// 	render() {
// 		return (
// 			<div className = 'header'>
// 				<h3>Mai Shitntsu logo</h3>
// 				<ul>{
// 						Object.keys(this.state.menu).map( (key, i) => {
// 							return (
// 								<li key={'headMenu' + key} data-switch={this.state.menu[key] ? 'on' : 'off'}>
// 									<Link to={'/' + key}>
// 										<input
// 											type='button' 
// 											value={'hoge'}
// 											onClick={() => this.onClickMenu(key)} />
// 									</Link>
// 								</li>
// 							)
// 						})
// 				}</ul>
// 			</div>
// 		);
// 	}
// }

import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom'

import headerTitle from "../static/images/headerTitle.png";
import { MENU } from '../static/constants/Menu';

import MenuButton from '../atoms/MenuButton';
import PointText from '../atoms/PointText';

import topLink from '../static/images/topLink.png';

const useStyles = makeStyles((theme) => ({
	header: {
		width: '100%',
		// height: '132px',
		borderBottom: '3px solid #350026',
		marginBottom: '32px',
		position: 'relative',

		// textDecoration: 'none',
		// color: 'currentColor',
		// '& .content': {
		// 	width: '160px',
		// 	height: '60px',
		// 	padding: '0 0 0 40px',
		// 	'& h6': {
			// 		marginTop: '-8px',
			// 		fontSize: '32px',
			// 	},
			// 	'& p': {
				// 		fontSize: '12px',
				// 		marginBlockEnd: '0'
				// 	}
				// },
				// '&:hover': {
					// 	opacity: '0.6',
					// 	// '& .content': {
						// 	// 	width: '200px'
						// 	// }
						// }
	},
	width: '306px',
	title: {
		height: '109px',
		backgroundImage: `url(${headerTitle})`,
		backgroundImage: `url(${headerTitle})`,
		backgroundPosition: 'initial',
		backgroundSize: '300px',
		backgroundRepeat: 'no-repeat',
		backgroundPositionX: '-60px',
		'& .titleContent': { marginLeft: '20px' },
		'& p': { fontSize: '14px', marginTop: '-28px' },
		'& h6': { fontSize: '64px', marginBottom: '0' }
	},
	// rightItems: {
	// 	'& .menuLink': { float: 'left' }
	// },
	topLink: {
		position: 'absolute',
		right: '12px',
		bottom: '8px',
		textDecoration: 'none',
		color: 'currentColor',
		'& img': {
			width: '190px'
		}
	},
	menuLink: {
		position: 'absolute',
		right: '190px',
		bottom: '8px'
	}
}));

/**
 * 
 * @param {inPageKey} props 今いるページ 'profile' || 'works' || 'notFound'
 */
export default function Header(props) {
  const classes = useStyles();
	const inMenu = MENU[props.inPageKey];

	var menu = { profile: MENU.profile, works: MENU.works };
	delete menu[props.inPageKey];
	
  return (
		<div className={classes.header}>
			<h1 className={classes.title}>
					<div className='titleContent'>
						<PointText text={inMenu.title}/>
						<p>{inMenu.content}</p>
					</div>
			</h1>
			<div className={classes.rightItems}>
					<div className={classes.menuLink}>
						{ Object.keys(menu).map((key) => (<MenuButton menu={ menu[key] } />)) }
					</div>
					<Link className={classes.topLink} to={MENU.top.uri}>
						<img src={topLink} alt={MENU.top.content} />
					</Link>
			</div>
		</div>
  );
}