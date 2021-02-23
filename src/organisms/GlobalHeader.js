import { makeStyles } from '@material-ui/styles';

import { MENU } from '../static/constants/Menu';
import HeaderButton from '../modules/HeaderButton';

const useStyles = makeStyles((theme) => ({
	header: {
		width: '100%',
		height: '1000px',
		backgroundColor: theme.palette.info.main,
		'& li': {
			position: 'fixed',
			top: '40px',
			zIndex: 1000
		},
		'& li:first-child': { left: '40px' },
		'& li:last-child': { right: '40px' }
	},
	circle: {
		display: 'inline-block',
		width: '100%',
		height: '100%',
		borderRadius: '100% 0 0 0',
		background: 'white'
	}
}));

/**
 * @param {inPageKey} props 今いるページ 'profile' || 'works' || 'notFound'
 */
export default function GlobalHeader(props) {
  const classes = useStyles();

	var menu = { works: MENU.works, top: MENU.top};
	// delete menu[props.inPageKey];
	// menu[props.inPageKey] = MENU.empty;
	
  return (
		<div className={ classes.header }>
			<div className={ classes.circle } />
			<ul>
				{
					Object.keys(menu).map((key) =>(
						<li key={'headerItem_', key}>
							<HeaderButton menu={ menu[key] } />
						</li>
					))
				}
			</ul>
		</div>
  );
}