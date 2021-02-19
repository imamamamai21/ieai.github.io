import React, { Component, useState } from 'react';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import { Container, createMuiTheme } from '@material-ui/core';
// import { createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopPage from './pages/Top';
import WorksPasswordPage from './pages/WorksPassword';
import WorksPage from './pages/Works';
import NotFoundPage from './pages/NotFound';

import { MENU } from './static/constants/Menu';

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
    const classes = this.props.classes;
    return (
      <ThemeProvider theme={theme}>
        <Container className={classes.root} maxWidth='false'>
          <Router>
            <Switch>
              <Route exact path={MENU.top.uri} component={ TopPage }/>
              <Route path={MENU.works.uri} component={ WorksPasswordPage }/>
              <Route path={MENU.myworks.uri} component={ WorksPage }/>
              <Route component={ NotFoundPage }/>
            </Switch>
          </Router>
        </Container>
      </ThemeProvider>
    )
  }
}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#350026'
    },
    secondary: {
      main: '#EAF400'
    }
  }
});
export default withStyles({
  root: {
    padding: '0'
  }
})(App);
