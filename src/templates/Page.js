import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import { Container } from '@material-ui/core'
import Measure from 'react-measure'

import GlobalHeader from '../organisms/GlobalHeader'
import ArrowButton from '../atoms/ArrowButton'

class Page extends Component {
	constructor(props) {
		super(props)
		this.state = {
			scroll: 0,
			dimensions: { width: -1, height: -1 }
		}
}

	componentDidMount() {
		window.scrollTo(0, 0)
		window.addEventListener('scroll', event => (this.setState({ scroll: this.scrollTop() })), true)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', event => (this.setState({ scroll: this.scrollTop() })))
	}

	/**
	 * scroll位置を返す
	 */
	scrollTop = () => {
    return Math.max(
			window.pageYOffset,
			document.documentElement.scrollTop,
			document.body.scrollTop);
	}

	onClickToUp(to) {
		window.scrollTo(0, to)
	}

	render() {
    const classes = this.props.classes
		const height = this.state.dimensions.height
		const rowPosition = height * 0.7
		const arrow = this.state.scroll < 100 ? 'down' : this.state.scroll > rowPosition ? 'up' : 'none'

    return (
			<Measure
        bounds
        onResize={contentRect => {
          this.setState({ dimensions: contentRect.bounds })
        }}
      >
				{({ measureRef }) => (
				<Container ref={ measureRef } className={ classes.page }>
					<GlobalHeader inPageKey={ this.props.inPageKey } />
					<Container maxWidth='md' className={ classes.pageContent }>
						{ this.props.children }
					</Container>
					<div className={ classes.arrow }>
						<ArrowButton
							direction={ arrow }
							disabled={ arrow === 'none'}
							onClickArrowButton={ arrow === 'up' ?
								() => window.scrollTo(0, 0) : 
								arrow === 'down' ? () => window.scrollTo(0, height) : null }
						/>
					</div>
				</Container>
				)}
			</Measure>
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
		display: 'flow-root'
	},
	arrow: {
		position: 'fixed',
		bottom: 20,
		right: '8%'
	}
})(withRouter(Page));
