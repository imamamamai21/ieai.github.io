import { makeStyles } from '@material-ui/styles';
import { GridListTile, GridListTileBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	imageCaption: {
    maxWidth: 220,
    borderRadius: 12,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      borderRadius: 12
    },
    '& .MuiGridListTileBar-rootSubtitle': {
      borderRadius: '0 0 12px 12px',
      bottom: 4
    }
  }
}));

/**
 * サービス画像
 * @param {service} props WORKS_DATAより
 */
export default function ImageCaption(props) {
  const classes = useStyles();
  const service = props.service;
  
  return (
    <GridListTile key={service.icon} className={ classes.imageCaption }>
    <img src={service.icon} alt='' />
    <GridListTileBar
      title={ service.name }
      subtitle={<span>{ service.content }</span>}
    />
  </GridListTile>
  );
}
