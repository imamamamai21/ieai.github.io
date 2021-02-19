import { makeStyles } from '@material-ui/styles';

import { MENU } from '../static/constants/Menu';

import HeaderButton from '../modules/HeaderButton';

const useStyles = makeStyles((theme) => ({
	header: {
		width: '100%',
		height: '1000px',
		backgroundColor: '#f4f4f3',

		'& li:first-child': {
			position: 'fixed',
			top: '40px',
			left: '40px'
		},
		'& li:last-child': {
			position: 'fixed',
			top: '40px',
			right: '40px'
		}
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

	var menu = [MENU.works, MENU.top];
	delete menu[props.inPageKey];
	
  return (
		<div className={ classes.header }>
			<div className={ classes.circle } />
			<ul>
				{
					menu.map((item, i) =>(
						<li key={'headerItem', i}>
							<HeaderButton menu={ item } />
						</li>
					))
				}
			</ul>
		</div>
  );
}