import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { TextField, Container, Button, Typography } from '@material-ui/core';

class WorksPaswordPage extends Component {
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
			<Container maxWidth="sm">
				<Typography variant="h4">Please Password!</Typography>
				<Typography variant="body2" color="textSecondary">
					業務履歴を見るためには、パスワードをご入力ください。
				</Typography>
				<TextField
					id="outlined-password-input"
					label="Standard"
					type="password"
					autoComplete="current-password"
					variant="outlined"
					className={classes.input}
					fullWidth
					onChange={this.inputPass}
					/>
				<Button 
					variant="contained" 
					color="primary"
					className={classes.button}
				>
					<Link to={this.state.inputText}>
						<Typography variant="button" display="block" gutterBottom>OK</Typography>
					</Link>
				</Button>
			</Container>
		)
	}
}

export default withStyles({
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
})(WorksPaswordPage);