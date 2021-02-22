import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
    position: 'relative',
    height: '100%'
  },
  line: {
    width: 2,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 4,
    display: 'block',
    zIndex: 1,
    backgroundSize: '2px 8px',
    backgroundRepeat: 'repeat-y',
    backgroundImage: 'linear-gradient(to bottom, #000, #000 2px, transparent 1px, transparent 2px)',
    backgroundPosition: 'top'
  }
}));

/**
 * 縦のドットライン
 */
export default function Line(props) {
  const classes = useStyles();
  
  return (
    <Box className={ classes.root }>
      <Box className={ classes.line } />
    </Box>
  );
}
