import { makeStyles } from '@material-ui/styles';
import { Icon, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import PointText from "../atoms/PointText";

const useStyles = makeStyles((theme) => ({
	link: {
		textDecoration: 'none',
	}, button: {
		padding: '16px',
		alignItems: 'baseline',
		'& h6': {
			fontSize: '18px',
		},
		'& .MuiTypography-root': {
			marginLeft: '8px'
		}
	}
}));

/**
 * 
 * @param {menu} props = import { MENU } from '../static/constants/Menu';
 */
export default function HeaderButton(props) {
  const classes = useStyles();
  return (
		<Link to={props.menu.uri} className={classes.link}>
			<Button className={classes.button}>
				<Icon color='secondary'>{props.menu.icon}</Icon>
        <PointText text={props.menu.title}/>
				<Typography color='primary' variant="caption" display="block" gutterBottom>{props.menu.content}</Typography>
      </Button>
		</Link>
  );
}