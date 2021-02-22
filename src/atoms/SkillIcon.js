import { makeStyles } from '@material-ui/styles';
import { Box, Grid, Typography } from '@material-ui/core';

import PointText from './PointText';

const useStyles = makeStyles((theme) => ({
	skillIcon: {
    width: 50,
    '& img': {
      borderRadius: '50%',
      width: 50,
      height: 50,
      objectFit: 'cover',
      border: '1px solid #FF6D00',
      margin: '0 auto',
      display: 'block'
    },
    '& span': {
      width: '100%',
      lineHeight: '1.2em',
      textAlign: 'center',
      display: 'block',
      opacity: '0.6'
    }
  }
}));

/**
 * 
 * @param {skill} props SKILL_ICONS
 * @param {hideText} props スキル名を表示するか否か
 */
export default function SkillIcon(props) {
  const classes = useStyles();
  const skill = props.skill;
  return (
    <Grid key={'skill_' + skill.name} item>
		  <Box className={ classes.skillIcon }>
        <img alt={skill.name} src={skill.icon} />
        { props.hideText ?
            <span /> :
            <PointText text={skill.name} fontSize='11px' variant='caption' />
        }
		  </Box>
    </Grid>
  );
}