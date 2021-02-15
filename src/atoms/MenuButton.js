import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'

import PointText from "./PointText";

import menuBgImg from "../static/images/menuBgImg.png";

const useStyles = makeStyles((theme) => ({
	manu: {
		textDecoration: 'none',
		color: 'currentColor',
		'& .content': {
			width: '160px',
			height: '60px',
			backgroundImage: `url(${menuBgImg})`,
			backgroundPosition: 'initial',
			backgroundSize: '160px',
			backgroundRepeat: 'no-repeat',
			padding: '0 0 0 40px',
			'& h6': {
				marginTop: '-8px',
				fontSize: '32px',
			},
			'& p': {
				fontSize: '12px',
				marginBlockEnd: '0'
			}
		},
		'&:hover': {
			opacity: '0.6'
		}
	}
}));

/**
 * 
 * @param {menu} props = import { MENU } from '../static/constants/Menu';
 */
export default function MenuButton(props) {
  const classes = useStyles();
  return (
		<Link className={classes.manu} to={'/' + props.menu.key}>
			<div className='content'>
					<p>{props.menu.content}</p>
					<PointText text={props.menu.title}/>
			</div>
		</Link>
  );
}