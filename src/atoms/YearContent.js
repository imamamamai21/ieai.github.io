import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

import PointText from './PointText';
import Line from './Line';

const useStyles = makeStyles((theme) => ({
	yearContent: {
    width: 40,
    height: '100%',
    position: 'relative',
    textAlign: 'center'
  },
  years: {
    position: 'absolute',
    top: 70,
    right: 16,
  }
}));

/**
 * 年表の年の部分
 * @param {year} props WORKS_DATAより
 */
export default function YearContent(props) {
  const classes = useStyles();
  var years = props.year;
  if (years.length === 2) years.splice(1, 0, '〜');
  
  return (
    <Box className={ classes.yearContent }>
      <Box className={ classes.years }>
        { years.map((year) => <PointText text={ year } />) }
      </Box>
      <Line />
    </Box>
  );
}
