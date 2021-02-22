import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

/**
 * キャッチーテキスト
 * @param {text} props 
 * @param {children} props 
 * @param {variant} props 
 * @param {color} props 
 * @param {fontSize} props 
 */
export default function PointText(props) {
  const classes = makeStyles((theme) => ({
		text: {
			fontFamily: `'Odibee Sans', cursive, 'Sawarabi Gothic', sans-serif`,
			fontSize: props.fontSize || '18px'
		}
	}))();
  return (
		<Typography
			variant={ props.variant || "subtitle2" }
			gutterBottom
			className={ classes.text }
			color={ props.color || 'primary' }
		>
			{ props.text || props.children }
		</Typography>
  );
}