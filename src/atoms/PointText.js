import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	text: {
		fontFamily: `'Odibee Sans', cursive, 'Sawarabi Gothic', sans-serif`,
		fontSize: '18px'
	}
}));

export default function PointText(props) {
  const classes = useStyles();
  return (
		<Typography
			variant={props.variant || "subtitle2"}
			gutterBottom
			className={classes.text}
			color='primary'
		>
			{ props.text || props.children }
		</Typography>
  );
}