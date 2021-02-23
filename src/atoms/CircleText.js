import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';


/**
 * 文字列を円形にする　
 * @param { text } props 
 * @param { size } props '00px'
 */
export default function CircleText(props) {
	const textAry = props.text.split('');

	// 要素の角度
	const getDivrotate = function(i) { return (360 / props.text.length) * i };

	const classes = makeStyles((theme) => ({
		circleText: {
			position: 'relative',
			width: props.size || 500,
			height: props.size || 500,
		},
		text: {
			position: 'absolute',
			height: '50%',
			transformOrigin: 'bottom center',
			top: '0',
			bottom: '0',
			left: '49.5%',
			fontFamily: `'Odibee Sans', cursive, 'Sawarabi Gothic', sans-serif`
		}
	}))();

	return (
		<Box className={classes.circleText}>
			{
			textAry.map((text, i) => (
				<span
					className={classes.text}
					style={{ transform: 'rotate(' + getDivrotate(i) + 'deg)' }}
				>{ text }</span>
			))
			}
		</Box>
	);
}