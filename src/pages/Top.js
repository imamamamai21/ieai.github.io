import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Box } from '@material-ui/core';

import { MENU } from '../static/constants/Menu';

import PointText from "../atoms/PointText";
import GlobalHeader from '../organisms/GlobalHeader';
import SelfIntroduction from '../organisms/SelfIntroduction';
import PersonalHistory from '../organisms/PersonalHistory';
import Page from "../templates/Page";

import topTitle from "../static/images/topTitle.png";
import pointCircle from "../static/images/pointCircle.png";
import { SKILLS } from "../static/constants/Skills";

const useStyles = makeStyles((theme) => ({
	topPage: { 
	},
	topTitle: {
		display: 'block',
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
	content: {
		margin: '80px auto',
		maxWidth: 600
	},
	skillContent: {
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
	leftMenu: { '& a': { float: 'right' } }
}));

export default function TopPage(props) {
  const classes = useStyles();
	const item = props.item;
	console.log('item===',props.item)
  return (
		<Page className={classes.topPage} inPageKey='top'>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				<h1 className={classes.topTitle}>
					<img src={topTitle} alt="MaiShintsu Portforio" />
				</h1>
				<PointText
					text='This SITE use : JavaScript / React /  React-Router / material-ui / Github Pages / AtomicDesign / illustrator'
				/>			
			</Grid>
			<Grid
				container
				direction="row"
				ju-tify="center"
				alignItems="center"
				className={classes.content}
			>
				<Box className={classes.skillContent}>
					<div className='contentText'>
						<PointText text={`My Skills >>>>>>>>>`} />
						{
							SKILLS.map((skill) => <PointText text={skill} />)
						}
					</div>
				</Box>
			</Grid>
			<Grid
				container
				direction="row"
				ju-tify="center"
				alignItems="center"
				className={classes.content}
			>
				<SelfIntroduction />
			</Grid>
			<Grid
				container
				direction="row"
				ju-tify="center"
				alignItems="center"
				className={classes.content}
			>
				<PersonalHistory />
			</Grid>
		</Page>
  );
}