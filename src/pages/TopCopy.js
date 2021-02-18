import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Typography } from '@material-ui/core';

import { MENU } from '../static/constants/Menu';

import PointText from "../atoms/PointText";
import MenuButton from "../atoms/MenuButton";

import topTitle from "../static/images/topTitle.png";
import pointCircle from "../static/images/pointCircle.png";
import { SKILLS } from "../static/constants/Skills";

const useStyles = makeStyles((theme) => ({
	topTitle: {
		marginBlockStart: '0.5em',
		marginBlockEnd: '0.2em',
		'& img': {
			width: '460px'
		}
	},
	line: {
		width: '100%',
		marginBottom: '16px',
		borderBottom: '3px solid #350026'
	},
	text: {
		fontFamily: `'Odibee Sans', cursive`,
		fontSize: '18px',
		width: '600px'
	},
	constent: {
		marginTop: '80px',
		backgroundImage: `url(${pointCircle})`,
		backgroundPosition: 'initial',
    backgroundSize: '140px',
    backgroundRepeat: 'no-repeat',
    height: '300px',
		width: '600px',
		'& .contentText': {
			padding: '18px 0 0 100px',
			'& p': {
				fontSize: '16px',
				width: '440px'
			}
		}
	},
	bottomFix: {
		position: 'fixed',
		top: '600px',
		left: '44px',
		right: '32px'
	},
	leftMenu: { '& a': { float: 'right' } }
}));

export default function TopPAge(props) {
  const classes = useStyles();
	const item = props.item;
	console.log('item===',props.item)
  return (
		<Container maxWidth="m" className={classes.topPage}>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				<h1 className={classes.topTitle}>
					<img src={topTitle} alt="MaiShintsu Portforio" />
				</h1>
				<div className={classes.line} />
				<PointText
					text='This SITE use : JavaScript / React /  React-Router / material-ui / Github Pages / AtomicDesign / illustrator'
				/>
			</Grid>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				<div className={classes.constent}>
					<div className='contentText'>
						<PointText text={`My Skills >>>>>>>>>`} />
						{
							SKILLS.map((skill) => <PointText text={skill} />)
						}
					</div>
				</div>
			</Grid>
			
			<div className={classes.bottomFix}>
			<Grid
				container
				direction="row"
				justify="space-between"
				alignItems="center"
			>
					<Grid item xs={6}><MenuButton menu={MENU.profile} /></Grid>
					<Grid item xs={6} className={classes.leftMenu}><MenuButton menu={MENU.works} /></Grid>
				</Grid>
			</div>
			
		</Container>
  );
}