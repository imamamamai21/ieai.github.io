import React, { Component } from 'react';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import { Container, createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopPage from './pages/Top';
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
	}

	render() {
    const classes = this.props.classes;
    return (
      <ThemeProvider theme={theme}>
        <Container className={classes.root} maxWidth='false'>
          <Router>
            <Switch>
              <Route exact path={MENU.top.uri} component={ TopPage }/>
              {/* <Route path={MENU.works.uri} component={ WorksPasswordPage }/> */}
              <Route path={MENU.works.uri} component={ WorksPage }/>
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
      main: '#350052'
    },
    secondary: {
      main: '#FF6D00'
    }
  }
});
export default withStyles({
  root: {
    padding: '0'
  }
})(App);
