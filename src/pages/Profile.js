import React, { Component } from 'react';
import { makeStyles, Button, ButtonBase, Typography, Paper, Grid } from '@material-ui/core';


/**
 * @props : show Boolean
 */
export default class ProfilePage extends Component {
	constructor (props) {
		super(props);
		this.state = {
			show: props.show
		};
	}
	// generateRows() {
  //   return data.map((item) => {
  //     // -----👇👇👇注目ポイント
  //     return ([
  //       <tr key={'firstRow_' + item.id}>
  //         <td>{item.firstName}</td><td>{item.lastName}</td>
  //       </tr>,
  //       <tr key={'secondRow_' + item.id}>
  //         <td>{item.firstName}</td><td>{item.lastName}</td>
  //       </tr>
  //     ]);
  //     // -----👆👆👆注目ポイント
  //   });
  // }
	render() {
		if(!this.props.show) return <div />

		const classes = makeStyles((theme) => ({
			root: {
				flexGrow: 1,
			},
			paper: {
				padding: theme.spacing(2),
				margin: 'auto',
				maxWidth: 500,
			},
			image: {
				width: 128,
				height: 128,
			},
			img: {
				margin: 'auto',
				display: 'block',
				maxWidth: '100%',
				maxHeight: '100%',
			},
		}));
		
		return (
			<div id='profilePage'>
				<Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt='photo' src='../static/images/miimage.JPG' />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  Mai Shintsu
                </Typography>
                <Typography variant='body2' gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1'>Github</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

				{/* <table>
					<thead>
						<th>進通 舞 - Mai Shintsu -</th>
						<th>Overview</th>
					</thead>
					<tbody>
						<div className='photo' />
						<div className='overview'>
							<p>こんにちは</p>
						</div>
					</tbody>
				</table>
				<table>
					<thead>
						<th>First Name</th>
						<th>Last Name</th>
					</thead>
					<tbody> { this.generateRows() } </tbody>
				</table> */}
			</div>
		);
	}
}

const data = [
  { id: 1, firstName: 'John', lastName: 'Doe' },
  { id: 2, firstName: 'Clark', lastName: 'Kent' }
];
