import { makeStyles } from '@material-ui/styles';
import { Button, ButtonBase, Typography, Link, Grid, SvgIcon } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import myimage from "../static/images/myimage.jpg";

const useStyles = makeStyles((theme) => ({
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	}, name: {
		'& span': {
			fontSize: '12px',
			color: 'gray'
		}
	}, profLink: {
		paddingLeft: '16px',
		'& .material-icons': {
			fontSize: '16px',
			padding: '0 4px 0 0'
		}
	}
}));

/**
 * 自己紹介部品
 */
export default function SelfIntroduction() {
  const classes = useStyles();
  return (
		<Grid className='selfIntroduction' container spacing={4}>
			<Grid item>
				<img className={classes.img} alt='photo' src={myimage}/>
			</Grid>
			<Grid item xs={12} sm container>
				<Grid item xs container direction='column' spacing={2}>
					<Grid item>
						<Typography variant='h4' className={classes.name}>
							進通 舞 <span>- Mai Shintsu -</span>
						</Typography>
						<Typography variant='body2' color='textSecondary' >
							1988(S63)年 1月10日 生まれ (33歳)
							<Link href="https://github.com/imamamamai21" target="_blank" className={classes.profLink} color='textSecondary'>
								<Icon>open_in_new</Icon>Github
							</Link>
							<Link href="https://qiita.com/ikemai/items" target="_blank" className={classes.profLink} color='textSecondary'>
								<Icon>open_in_new</Icon>Qiita
							</Link>
						</Typography>
					</Grid>
					{ INT_ITEMS.map((item, i) => {
						return (
							<Grid item>
								<Typography variant='h6'>{ item.title }</Typography>
								{item.details.map((detail, i) => {
									return <Typography variant='body2' key={ item.title, i }>{ detail }</Typography>
									})}
							</Grid>
						)
						})
					}
				</Grid>
			</Grid>
		</Grid>
  );
}

const MY_HISTORY = [
	'2003年3月 八王子市立第七中学校 卒業',
	'2006年3月 東京都立成瀬高等学校 卒業',
	'2008年3月 東京デザイナー学院 プロダクトデザイン学科 ファニチャー専攻 卒業',
	'2013年3月 武蔵野美術大学 情報デザイン学科 卒業',
	'2013年4月 株式会社サイバーエージェント 入社'
];

const COMMENT = [
	'私はデザイナー上がりのエンジニアです。',
	'(といってもデザインの仕事をしていたのは学生時代のデザイン事務所と内定先でのアルバイトの時だけになります)',
	'もっと『ものづくり』の根本から関わりたいと思い、就職を機に『エンジニア』という職種を選びました。',
	'エンジニアの世界は広く、足を踏み入れれば踏み入れるほど、多数の可能性が発見できます。'
]

const MY_SKILLS = [
	'JavaScript / React / redux / jQuery', 'TypeScript', 'Swift / rxSwift'
]
const INT_ITEMS = [
	{ titie: '', details: COMMENT },
	{ title: '経歴', details: MY_HISTORY },
	{ title: 'スキルセット', details: MY_SKILLS }
];