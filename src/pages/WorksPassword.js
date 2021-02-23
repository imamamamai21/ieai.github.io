import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { TextField, Container, Button, Typography, Box } from '@material-ui/core';

import Page from '../templates/Page';
import PointText from '../atoms/PointText';

class WorksPasswordPage extends Component {
	constructor (props) {
		super(props);
		this.state = { inputText: '' };
		this.inputPass = this.inputPass.bind(this);
	}
	
	inputPass(event) {
		this.setState({ inputText: event.target.value });
	}

	render() {
		const classes = this.props.classes;
		return (
			<Page inPageKey='works' className='worksPasswordPage'>
				<Container maxWidth='sm'>
					<Box className={ classes.title }>
						<PointText variant='h2'>Please Password!</PointText>
					</Box>
					<Typography variant='body2' color='textSecondary'>
						業務履歴を見るためには、パスワードをご入力ください。
					</Typography>
					<TextField
						id='outlined-password-input'
						label='Standard'
						type='password'
						autoComplete='current-password'
						variant='outlined'
						className={classes.input}
						fullWidth
						onChange={this.inputPass}
						/>
					<Link to={this.state.inputText}>
						<Button 
							variant='contained' 
							color='primary'
							className={classes.button}
							>
								<Typography variant='button' display='block' gutterBottom>OK</Typography>
						</Button>
					</Link>
				</Container>
			</Page>
		)
	}
}

export default withStyles({
	title: {
		textAlign: 'center',
		padding: '40px 0',
		'& h2': { fontSize: '32px' }
	},
	input: {
		marginTop: '24px'
	},
	button: {
		float: 'right',
		marginTop: '12px',
		'& a': {
			textDecoration: 'none',
			color: 'white'
		}
	}
})(WorksPasswordPage);