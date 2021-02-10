import React, { Component, useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';

import TopPage from './pages/Top';
import WorksPage from './pages/Works';
import ProfilePage from './pages/Profile';

import Header from './organisms/Header';

export default class App extends Component {
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
    return (
      <Container maxWidth='lg'>
        <TopPage show = { showPage.top } />

        <Header onClickMenu={this.onClickMenu} target={{
          works: showPage.works,
          profile: showPage.profile
        }} />

        <ProfilePage show ={ showPage.profile } />
        <WorksPage show ={ showPage.works } />
      </Container>
    );
  }
}
