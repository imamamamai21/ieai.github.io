import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, Link, Grid } from '@material-ui/core';
import { Icon } from '@material-ui/core';

import PointText from '../atoms/PointText';
import SkillIcon from '../atoms/SkillIcon';
import YearContent from '../atoms/YearContent';
import ImageCaption from '../atoms/ImageCaption';

const useStyles = makeStyles((theme) => ({
	chronologyParts: {
		'& li': {
			listStyle: 'none', margin: '0 auto'
		},
		'& .MuiGrid-spacing-xs-8': {
			'& .MuiGrid-item': { padding: '0 32px'},
			margin: 0
		}
	},
	serviceContent: {
		'& h6': { fontSize: 24 }
	},
	serviceIcon: {
		margin: 'auto',
		display: 'block',
		maxWidth: '200px'
	},
	openIcon: { fontSize: 12 },
	sourceLink: { fontSize: 11 },
	skillRoot: {
    flexGrow: 1,
		padding: '32px 0',
		'& .MuiGrid-item': { padding: '0 8px !important' },
		'& .MuiGrid-spacing-xs-4': { margin: 0 }
  },
	contentBox: { padding: '60px 0' }
}));

/**
 * 年表パーツ
 */
export default function ChronologyParts(props) {
  const classes = useStyles();
	const item = props.item;
  return (
		<li key={item.key} className={ classes.chronologyParts }>
			<Grid container spacing={ 8 }>
				<Grid item xs='1'>
					<YearContent year={ item.year } />
				</Grid>			
				<Grid item xs='3'>{/* サービスイメージ */}
					<Box className={ classes.contentBox }>
					{ item.service.link != '' ?
						(<Link href={item.service.link} target='_blank'>
							<ImageCaption service={ item.service } />
						</Link>) :
						<ImageCaption service={ item.service } />
					}
					</Box>
				</Grid>
				<Grid item xs='5'>{/* 説明 */}
					<Box className={ classes.contentBox }>
						{ item.comments.map((comment) => <Typography variant='subtitle2'>{comment}</Typography>) }
					<Grid container className={classes.skillRoot} spacing={2}>
						<Grid item xs={12}>
						<PointText text='Skills used' />
							<Grid container justify='left' spacing={4}>
								{/* スキル */
								item.skills.map((skill, i) => <SkillIcon skill={ skill } />)
								}
							</Grid>
						</Grid>
					</Grid>
					</Box>
				</Grid>
				<Grid item xs='2'>{/* ソース */}
					<Box className={ classes.contentBox }>
						{(item.sources.length === 0) ? 
							<span /> :
							item.sources.map((source) => {
								return (<Link href={source.uri} target='_blank'>
									<Typography variant='subtitle2' color='secondary' className={classes.sourceLink}>
										<Icon className={classes.openIcon} color='primary'>open_in_new</Icon>{ source.title }
									</Typography>
								</Link>)
							})}
						</Box>
				</Grid>
			</Grid>
		</li>
  );
}