import { makeStyles } from '@material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
		'& li': {
			width: '18% !important',
			padding: '8px !important',
		},
		'& .MuiGridListTile-tile': {
			borderRadius: 12
		}
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'white',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  }
}));

/**
 * 
 * @param { data } props const data = [
 *   {
 *     img: 画像src,
 *     title: 画像タイトル,
 *     subtitle: 画像サブタイトル
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageScrolling(props) {
  const classes = useStyles();

  return (
		<div className={ classes.root }>
      <GridList className={ classes.gridList } cols={ 2.5 }>
        {props.data.map((data) => (
          <GridListTile key={data.img}>
            <img src={data.img} alt={ data.title } />
            <GridListTileBar
              title={data.title}
							subtitle={ data.subtitle }
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}