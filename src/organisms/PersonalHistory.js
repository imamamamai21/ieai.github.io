import { makeStyles } from '@material-ui/styles';
import { Container, Typography, Icon, Grid } from '@material-ui/core';

import PointText from '../atoms/PointText';

const useStyles = makeStyles((theme) => ({
	personalHistory: {
		marginTop: '60px',
	},
	items: {
		'& h6': {
			fontSize: '12px',
			textAlign: 'right'
		}
	},
	title: {
		'& h6': { fontSize: '24px', paddingBottom: '12px'}
	}
}));

/**
 * 経歴
 */
export default function PersonalHistory() {
  const classes = useStyles();
  return (
		<Container className={ classes.personalHistory } maxWidth='s'>
			<div className={ classes.title }>
				<PointText>
					<Icon color='secondary'>history</Icon>PERSONAL HISTORY
				</PointText>
			</div>
			{
				Object.keys(MY_HISTORY).map((key) => (
					<Grid container spacing={1} className={ classes.items } alignItems='baseline'>
						<Grid item xs='2'>
							<PointText text={ MY_HISTORY[key].year } />
						</Grid>
						<Grid item xs='10'>
							<Typography variant='body2'>{ MY_HISTORY[key].info }</Typography>
						</Grid>
					</Grid>
				))
			}
		</Container>
  );
}

const MY_HISTORY = [
	{ year: '2003年3月', info: '八王子市立第七中学校 卒業' },
	{ year: '2006年3月', info: '東京都立成瀬高等学校 卒業' },
	{ year: '2008年3月', info: '東京デザイナー学院 プロダクトデザイン学科 ファニチャー専攻 卒業' },
	{ year: '2013年3月', info: '武蔵野美術大学 情報デザイン学科 卒業' },
	{ year: '2013年4月', info: '株式会社サイバーエージェント 入社' }
];
