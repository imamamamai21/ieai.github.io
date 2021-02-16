import React, { Component, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { Container, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopPage from './pages/Top';
import WorksPaswordPage from './pages/WorksPasword';
import WorksPage from './pages/Works';
import ProfilePage from './pages/Profile';
import NotFoundPage from './pages/NotFound';

class App extends Component {
  constructor (props) {
		super(props);
		this.state = {
			showPage: {
        top: true,
        profile: false,
        works: false,
      }
		};
    this.onClickMenu = this.onClickMenu.bind(this);
	}

  onClickMenu(key) {
    this.setState({ showPage: {
      top: (key === 'top'),
      profile: (key === 'profile'),
      works: (key === 'works')
    }});
    console.log(this.state.showPage)
  }

	render() {
    const { showPage } = this.state;
    const classes = this.props.classes;
    return (
      <Container maxWidth='lg'>
        <Router>
          <Switch>
            <Route exact path='portfolio/' component={TopPage}/>
            <Route path='portfolio/profile' component={ProfilePage}/>
            <Route path='portfolio/works' component={WorksPaswordPage}/>
            <Route path='portfolio/myworks' component={WorksPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </Router>
      </Container>
    )
  }
}

export default withStyles({
})(App);
