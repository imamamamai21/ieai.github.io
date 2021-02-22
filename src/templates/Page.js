import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

import GlobalHeader from '../organisms/GlobalHeader';

class Page extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

  componentDidUpdate(prevProps) {
		window.scrollTo(0, 0);
  }

	render() {
    const classes = this.props.classes;
    return (
			<Container className={ classes.page }>
				<GlobalHeader inPageKey={ this.props.inPageKey } />
				<div className={ classes.pageContent }>
					{ this.props.children }
				</div>
			</Container>
    )
  }
}

export default withStyles({
	page: {
    backgroundColor: 'white',
		maxWidth: 'none'
	},
	pageContent: {
		margin: '40px auto',
		marginTop: '-900px',
    paddingBottom: '120px'
	}
})(withRouter(Page));
