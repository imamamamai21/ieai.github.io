import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, Link, Grid, SvgIcon } from '@material-ui/core';
import { TableCell, Icon, TableRow } from '@material-ui/core';

import PointText from '../atoms/PointText';

const useStyles = makeStyles((theme) => ({
	serviceContent: {
		'& h6': { fontSize: '24px' }
	}, serviceIcon: {
		margin: 'auto',
		display: 'block',
		maxWidth: '200px'
	}, skillIcon: {
		height: '80px',
	}, profLink: {
		paddingLeft: '16px',
		'& .material-icons': {
			fontSize: '16px',
			padding: '0 4px 0 0'
		}
	},
	openIcon: { fontSize: '12px' },
	skillRoot: {
    flexGrow: 1,
		paddingTop: '16px'
  }
}));

/**
 * 年表パーツ
 */
export default function ChronologyParts(props) {
  const classes = useStyles();
	const [spacing, setSpacing] = React.useState(2);
	const item = props.item;
  return (
		<TableRow key={item.key}>
			<TableCell component="th" scope="row">
				<PointText text={ item.year } />
			</TableCell>
			<TableCell>{/* サービス */}
				{ item.service.link != '' ?
					(<Link href={item.service.link} target='_blank'>
						<PointText text={ item.service.name } />
						{ item.serviceIcon != '' ?
							<img className={classes.serviceIcon} alt={item.key} src={item.service.icon}/> : <div />
						}
						</Link>
					) : <PointText text={ item.service.name } />
				}
				<Typography variant='caption'>{ item.service.content }</Typography>
			</TableCell>
			<TableCell>
			{/* 説明 */
				item.comments.map((comment) => <Typography variant='subtitle2'>{comment}</Typography>)
			}
				<Grid container className={classes.skillRoot} spacing={2}>
					<Grid item xs={12}>
						<Grid container justify="left" spacing={spacing}>
							{/* スキル */
							item.skills.map((skill, i) => (
								<Grid key={'skill' + i} item>
									<img className={classes.skillIcon} alt={skill.name} src={skill.icon} />
									<Typography variant='subtitle2' color='textSecondary'>{skill.name}</Typography>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</TableCell>
			<TableCell>{/* ソース */
				(item.sources.length === 0) ? 
					<Typography variant='subtitle2'>なし</Typography> :
					item.sources.map((source) => {
						return (<Link href={source.uri} target='_blank'>
							<Typography variant='subtitle2'>
								<Icon className={classes.openIcon}>open_in_new</Icon>{ source.title }
							</Typography>
						</Link>)
					})
			}</TableCell>
		</TableRow>
  );
}