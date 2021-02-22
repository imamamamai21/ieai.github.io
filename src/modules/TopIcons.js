import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

import PointText from "../atoms/PointText";
import CircleText from "../atoms/CircleText";
import topLogo from "../static/images/topLogo.png";

const useStyles = makeStyles((theme) => ({
	topIcons:{
		position: 'relative',
		width: 560,
		height: 560,
		margin: 'auto'
	},
	topLogo: {
		'& img': {
			width: '280px',
			objectFit: 'contain',
		}
	},
	iconBox: {
		position: 'absolute', top: 55, left: 136
	},
	circleBox: {
		position: 'absolute', top: 0, left: 0,
		animation: `$spin infinite 200s`,
		'& span': {
			color: `${ theme.palette.secondary.light }`,
			fontSize: 20
		}
	},
	textBox: {
		position: 'absolute', bottom: 50, left: 97,
		textAlign: 'center',
		width: 360,
		'& :first-child': {
			marginBottom: '20px',
			color: theme.palette.secondary.dark
		}
	},
	'@keyframes spin': {
		'0%': { transform: 'rotate(0deg)' },
		'100%': { transform: 'rotate(360deg)' }
	},
	circle: {
		width: 570,
		height: 570,
		position: 'absolute',
		left: '-6px',
		top: '-6px',
		borderColor: theme.palette.secondary.light,
		borderWidth: '2px',
		borderStyle: 'solid',
		borderRadius: '50%'
	}
}));

/**
 * Topイメージ
 */
export default function TopIcons(props) {
  const classes = useStyles();
  return (
		<Box>
			<Box className={ classes.topIcons }>
				<Box className={ classes.iconBox }>
					<h1 className={classes.topLogo}>
						<img src={topLogo} alt="MaiShintsu" />
					</h1>
				</Box>
				<Box className={ classes.textBox }>
					<PointText text='This SITE to use' />
					<PointText
							text='React.js /  React-Router / material-ui / Github Pages / AtomicDesign / illustrator'
					/>
				</Box>
				<Box className={ classes.circleBox }>
					<CircleText
						text='HELLO! My name is MAI SHINTSU. This site introduces me and the work I have been involved in.'
						size='560px'
					/>
				</Box>
				<Box className={ classes.circle } />
			</Box>
		</Box>
  );
}