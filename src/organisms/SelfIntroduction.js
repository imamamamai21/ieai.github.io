import { makeStyles } from '@material-ui/styles';
import { Container, Box, Typography, Link, Grid, SvgIcon } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import PointText from '../atoms/PointText';

import maishintsu from "../static/images/maishintsu.jpg";
import { SKILLS } from "../static/constants/Skills";

const useStyles = makeStyles((theme) => ({
	selfIntrodution: {
		// maxWidth: 600,
		// margin: 'auto'
	},
	img: {
		margin: 'auto',
		display: 'block',
		height: '220px',
	}, name: {
		'& span': {
			fontSize: '12px',
			color: 'gray'
		}
	},
	names: {
		'& h6': { fontSize: '18px' },
		'& span': { marginTop: '-8px' }
	},
	comments: {
		paddingTop: '16px'
	},
	profLink: {
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
		<Container maxWidth='m' className={classes.selfIntrodution}>
			<Grid className='selfIntroduction' container spacing={4}>
				<Grid item>
					<img className={classes.img} alt='photo' src={ maishintsu　}/>
				</Grid>
				<Grid item xs={12} sm container>
					<Grid item xs container direction='column' spacing={2}>
						<Grid item>
							<Box className={ classes.names }>
								<PointText text='進通 舞 - Mai Shintsu -' />
							</Box>
							<Typography variant='body2' color='textSecondary' >
								1988(S63)年 1月10日 生まれ (33歳)
								<Link href="https://github.com/imamamamai21" target="_blank" className={classes.profLink} color='textSecondary'>
									<Icon>open_in_new</Icon>Github
								</Link>
								<Link href="https://qiita.com/ikemai/items" target="_blank" className={classes.profLink} color='textSecondary'>
									<Icon>open_in_new</Icon>Qiita
								</Link>
							</Typography>
							<Box className={ classes.comments }>
								{ COMMENT.map((content) => <Typography variant='body2'>{ content }</Typography>)}
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
  );
}

const COMMENT = [
	'私はデザイナー上がりのエンジニアです。',
	'(といってもデザインの仕事をしていたのは学生時代のデザイン事務所と内定先でのアルバイトの時だけになります)',
	'もっと『ものづくり』の根本から関わりたいと思い、就職を機に『エンジニア』という職種を選びました。',
	'エンジニアの世界は広く、足を踏み入れれば踏み入れるほど、多数の可能性が発見できます。',
	'0歳と2歳の2人の息子を育てています。'
]
