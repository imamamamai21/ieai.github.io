import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { Container, Button, Typography } from '@material-ui/core';

import Header from '../organisms/Header';
import PointText from '../atoms/PointText';

const useStyles = makeStyles((theme) => ({
	root: {
		'& h6': { fontSize: '90px', opacity: '0.6' }
	}
}));

export default function NotFoundPage(props) {
	const classes = useStyles();
	return (
		<div class='notFoundPage'>
			<Header />
			<Container maxWidth="sm" className={classes.root}>
				<PointText text="404 Not Found." />
				<Typography variant="body2" color="textSecondary">
					申し訳ありません。ページが見つかりません。
				</Typography>
				<Typography variant="body2" color="textSecondary">
					戻って再度お試しください。
				</Typography>
			</Container>
		</div>
	);
}
