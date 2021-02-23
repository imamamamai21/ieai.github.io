import { makeStyles } from '@material-ui/styles';
import { Container, Typography, Grid } from '@material-ui/core';

import PointText from '../atoms/PointText';

const useStyles = makeStyles((theme) => ({
	items: {
		'& h6': {
			fontSize: 16,
			textAlign: 'right'
		}
	}
}));

/**
 * 経歴
 */
export default function PersonalHistory() {
  const classes = useStyles();
  return (
		<Container>
			{
				Object.keys(MY_HISTORY).map((key) => (
					<Grid container spacing={2} className={ classes.items } alignItems='baseline'>
						<Grid item xs='4'>
							<PointText text={ MY_HISTORY[key].year } />
						</Grid>
						<Grid item xs='8'>
							<Typography variant='body2'>{ MY_HISTORY[key].info }</Typography>
						</Grid>
					</Grid>
				))
			}
		</Container>
  );
}

const MY_HISTORY = [
	{ year: '2003.3', info: '八王子市立第七中学校 卒業' },
	{ year: '2006.3', info: '東京都立成瀬高等学校 卒業' },
	{ year: '2008.3', info: '東京デザイナー学院 プロダクトデザイン学科 ファニチャー専攻 卒業' },
	{ year: '2013.3', info: '武蔵野美術大学 情報デザイン学科 卒業' },
	{ year: '2013.4', info: '株式会社サイバーエージェント 入社' }
];
