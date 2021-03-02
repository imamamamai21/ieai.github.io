import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import { Container, Box, Link } from '@material-ui/core'
import Measure from 'react-measure'

import PointText from '../atoms/PointText'
import CircleText from '../atoms/CircleText'
import topLogo from '../static/images/topLogo.png'

/**
 * Topイメージimport { Component } from 'react';
 */
class TopIcons extends Component {
	state = {
    dimensions: { width: -1, height: -1 }
  }

	render() {
		const { width, height } = this.state.dimensions
		const classes = this.props.classes
		return (
			<Measure
        bounds
        onResize={contentRect => {
          this.setState({ dimensions: contentRect.bounds })
        }}
      >
				{({ measureRef }) => (
					<Container ref={ measureRef } maxWidth="sm" className={ classes.topIcons } style={{ height: width }}>
						<Box className={ classes.circleBox }>
							<CircleText
								text='HELLO! My name is MAI SHINTSU. This site introduces me and the work I have been involved in.'
								size={ width - 4 }
							/>
						</Box>
						<Box className={ classes.iconBox }>
							<h1 className={classes.topLogo}>
								<img src={topLogo} alt='MaiShintsu' />
							</h1>
							<Box className={ classes.textBox }>
								<PointText text='This SITE to use' />
								<PointText
										text='React.js /  React-Router / material-ui / Github Pages / AtomicDesign / illustrator / Photoshop'
										fontSize={14}
								/>
								<Link href='https://github.com/imamamamai21/portfolio' target='_blank'>
									See the code for this Github
								</Link>
							</Box>
						</Box>
					</Container>
        )}
				
			</Measure>
		)
	}
}

export default withStyles((theme) => ({
	topIcons:{
		position: 'relative',
		margin: 'auto',
		borderColor: theme.palette.primary.light,
		borderWidth: 2,
		borderStyle: 'solid',
		borderRadius: '50%'
	},
	topLogo: {
		'& img': {
			width: '100%',
			objectFit: 'contain',
		}
	},
	iconBox: {
		position: 'absolute', top: '3%', left: '18%', right: '18%', bottom: '8%'
	},
	circleBox: {
		flex: 1,
		position: 'absolute', top: 0, left: 0,
		animation: `$spin infinite 200s`,
		'& span': {
			color: `${ theme.palette.primary.light }`,
			fontSize: 20
		}
	},
	textBox: {
		position: 'absolute', bottom: 0, left: 0, right: 0,
		textAlign: 'center',
		'& :first-child': {
			marginBottom: 7,
			color: theme.palette.primary.light
		},
		'& a': {
			fontSize: 12
		}
	},
	'@keyframes spin': {
		'0%': { transform: 'rotate(0deg)' },
		'100%': { transform: 'rotate(360deg)' }
	},
	circle: {
		width: '100%',
		resizeMode: 'contain',
		position: 'absolute',
		left: 0,
		top: 0,
		borderColor: theme.palette.primary.light,
		borderWidth: 2,
		borderStyle: 'solid',
		borderRadius: '50%'
	}
}))(withRouter(TopIcons));