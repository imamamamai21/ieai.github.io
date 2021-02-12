import { makeStyles } from '@material-ui/styles';
import { Box, ButtonBase, Typography, Link, Grid, SvgIcon } from '@material-ui/core';
import { Table, TableCell, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import myimage from "../static/images/myimage.jpg";

const useStyles = makeStyles((theme) => ({
	serviceIcon: {
		margin: 'auto',
		display: 'block',
		maxWidth: '200px'
	}, skillIcon: {
		maxWidth: '80px',
	}, profLink: {
		paddingLeft: '16px',
		'& .material-icons': {
			fontSize: '16px',
			padding: '0 4px 0 0'
		}
	}
}));

/**
 * 年表パーツ
 */
export default function ChronologyParts(props) {
  const classes = useStyles();
	const item = props.item;
	console.log('item===',props.item)
  return (
		<TableRow key={item.key}>
			<TableCell component="th" scope="row">
				<Typography variant='h5'>{ item.year }</Typography>
			</TableCell>
			<TableCell>{/* サービス */}
				<Typography variant='subtitle1'>
					<Link href={item.serviceLink} target='_blank'>
						{item.service.name}
						<img className={classes.serviceIcon} alt={item.key} src={item.service.icon}/>
					</Link>
					<Typography variant='caption'>{item.service.content}</Typography>
				</Typography>
			</TableCell>
			<TableCell>{/* 説明 */}
				<Typography variant='dody2'>{item.comment}</Typography>
			</TableCell>
			<TableCell>{/* スキル */}
				{item.skills.map((skill) => (
					<Box>
						<img className={classes.skillIcon} alt={skill.name} src={skill.icon} />
						<Typography variant='caption' color='textSecondary'>{skill.name}</Typography>
					</Box>
				))}
			</TableCell>
		</TableRow>
		/*
		<Grid className='chronologyParts' container spacing={4}>
			<Grid item>
				<Typography variant='h4'>2013</Typography>
			</Grid>
			<Grid item>
				<img className={classes.img} alt='enbu' src='https://i.ytimg.com/vi/UaNgJkSyofk/maxresdefault.jpg'/>
				<Typography variant='h5'>
					<Link href='https://www.sumzap.co.jp/service/sengokuenbu/#page-top'>戦国炎舞</Link>
				</Typography>
				<Typography variant='dody2'>
					言語：ActionScript [AIRアプリ]
				</Typography>
			</Grid>
			<Grid item xs={12} sm container>
				<Typography variant='dody2'>
					就職して初めて関わったサービスはゲームでした。ActionScript
				</Typography>
			</Grid>
			<Grid item>
				<img className={classes.img} alt='photo' src='https://www.globalonlinetrainings.com/wp-content/uploads/2015/12/ActionScript-3.0-training-.jpg'/>
			</Grid>
		</Grid>*/
  );
}