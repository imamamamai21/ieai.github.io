import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom'

import PointText from "./PointText";

const useStyles = makeStyles((theme) => ({
	gotoButton: {
		margin: '32px',
		width: '100%',
		height: 24,
		textAlign: 'center',
		position: 'relative',
		textDecoration: 'none',
		display: 'block',
		'& .triangle': {
			position: 'absolute',
			right: 0,
			bottom: 9,
			borderTop: '20px solid transparent',
			borderLeft: '30px solid #FF6D00',
			borderBottom: '20px solid transparent'
		},
		'&:hover .triangle': {
			right: '-30px',
			transform: 'scale(1.3, 1.3)',
			transition: 'all .4s'
		},
		'& .line': {
			position: 'absolute',
			right: 20,
			bottom: 28,
			width: 40,
			borderBottom: '2px solid #350052',
		},
		'&:hover .line': {
			right: '-10px',
			transition: 'all .4s'
		},
	},
	arrow: {
		position: 'absolute',
		right: '32%',
		bottom: '-36px',
	}
}));

/**
 * リンク先のページへ飛ばすボタン　
 * @param { title } props リンクタイトル 例『　詳細はこちら　ー＞　』
 * @param { link } props portfolio/***
 */
export default function GotoButton(props) {
  const classes = useStyles();
  return (
		<Link to={props.link} className={classes.gotoButton}>
			<Box className='circle' />
			<PointText text={props.title} fontSize='16px' />
			<Box className={classes.arrow}>
				<Box className='triangle' />
				<Box className='line' />
			</Box>
		</Link>
  );
}