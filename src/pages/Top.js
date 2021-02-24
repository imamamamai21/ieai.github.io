import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

// Icons
import BuildIcon from '@material-ui/icons/Build';
import HistoryIcon from '@material-ui/icons/History';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// Atoms
import PointText from '../atoms/PointText';
import SkillIcon from '../atoms/SkillIcon';
import GotoButton from '../atoms/GotoButton';

// Modules
import TopIcons from '../modules/TopIcons';
import ImageScrolling from '../modules/ImageScrolling';

// Organisms
import SelfIntroduction from '../organisms/SelfIntroduction';
import PersonalHistory from '../organisms/PersonalHistory';

// Templates
import Page from '../templates/Page';

// Data
import { SKILL_ICONS } from '../static/constants/Skills';
import { WOKRS_DATA } from '../static/constants/WorksData';

const useStyles = makeStyles((theme) => ({
	content: {
		margin: '80px auto',
		alignItems: 'center'
	},
	topContent: {
		width: 'auto',
		margin: '-100px auto -50px'
	},
	title: {
		paddingBottom: 14,
		'& h6': { marginTop: 60, fontSize: 24 },
		'& .MuiSvgIcon-root': { verticalAlign: 'middle', marginLeft: 8 }
	}
}));

export default function TopPage(props) {
  const classes = useStyles();
	
  return (
		<Page inPageKey='top'>
			<Grid container className={ classes.content }>
				<Grid container className={ classes.topContent }>
					<TopIcons />		
				</Grid>
			</Grid>
			<Grid container className={ classes.content }>
				<div className={ classes.title }>
					<PointText>
						MY NAME IS .
						<AccountCircleIcon color='primary' />
					</PointText>
				</div>
				<SelfIntroduction />
			</Grid>
			<Grid container className={ classes.content }> {/******** 経歴 ********/}
				<div className={ classes.title }>
					<PointText>
						PERSONAL HISTORY
						<HistoryIcon color='primary' />
					</PointText>
				</div>
				<PersonalHistory />
			</Grid>
			<Grid container className={ classes.content }> {/******** スキル ********/}
				<div className={ classes.title }>
					<PointText>
						MY SKILLS
						<BuildIcon color='primary' />
					</PointText>
				</div>
				<Grid container spacing={4} justify='left'>
					{ Object.keys(SKILL_ICONS).map((key) => (
						<SkillIcon skill={SKILL_ICONS[key]} />
					)) }
				</Grid>
			</Grid>
			<Grid container className={ classes.content }> {/******** 仕事履歴 ********/}
				<div className={ classes.title }>
					<PointText>
						WORKS HISTORY
						<AssignmentIcon color='primary' />
					</PointText>
					<Typography variant='body2'>
						関わってきた仕事の履歴を一覧にまとめました。
					</Typography>
				</div>
				<ImageScrolling data={ WOKRS_DATA.map((data) => (
					{ img: data.service.icon, title: data.service.name, subtitle: data.service.content }
				))} />
				<GotoButton link='works' title='仕事履歴へ' />
			</Grid>
		</Page>
  );
}