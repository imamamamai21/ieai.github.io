import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { Container, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: '24px 12px 0 0',
		'& a': {
			textDecoration: 'none',
			color: 'white'
		}
	}
}));

export default function NotFoundPage(props) {
	const classes = useStyles();
	return (
		<Container maxWidth="sm" id='notFoundPage'>
			<Typography variant="h4">Not Found</Typography>
			<Typography variant="body2" color="textSecondary">
				申し訳ありません。ページが見つかりません。
			</Typography>

			<Button 
				variant="contained" 
				color="primary"
				className={classes.button}
			>
				<Link to='/'>
					<Typography variant="button" display="block" gutterBottom>Go to TOP page</Typography>
				</Link>
			</Button>
			<Button 
				variant="contained" 
				color="secondary"
				className={classes.button}
			>
				<Link to='/works'>
					<Typography variant="button" display="block" gutterBottom>Go to WORKS page</Typography>
				</Link>
			</Button>
		</Container>
	);
}
