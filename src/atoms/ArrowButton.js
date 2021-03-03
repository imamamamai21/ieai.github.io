import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core'

/**
 * 上下ボタン
 * @param { String } props direction : up || down
 * @param { Boolean } props disabled
 * @param { Function } props onClickArrowButton
 */
export default function ArrowButton(props) {
	const transBorder = '40px solid transparent'
	const colorBorder = (theme) => `40px solid ${ theme.palette.primary.light }`
	const isUp = props.direction === 'up'

  const classes = makeStyles((theme) => ({
		arrowButton: {
			position: 'relative',
			height: 70,
			width: 80,
			backgroundColor: 'transparent',
      border: 'none',
      cursor: 'auto',
      outline: 'none',
      padding: 0,
      appearance: 'none',
			'& .triangle': {
				position: 'absolute',
				right: 0,
				top: isUp ? 0 : 30,
				borderLeft: transBorder,
				borderRight: transBorder,
				borderTop: isUp ? '' : colorBorder(theme),
				borderBottom: isUp ? colorBorder(theme) : '',
			},
			'& .line': {
				position: 'absolute',
				height: 42,
				right: '50%',
				bottom: isUp ? 0 : 27,
				borderLeft: `2px solid ${ theme.palette.secondary.light }`,
			},
			'&:disabled': {
				opacity: 0,
				transition: 'all .4s'
			}
		}
	}))();
  return (
		<button className={ classes.arrowButton } disabled={ props.disabled } onClick={ props.onClickArrowButton }>
			<Box className='triangle' />
			<Box className='line' />
		</button>
  );
}