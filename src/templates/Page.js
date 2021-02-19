import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

import GlobalHeader from '../organisms/GlobalHeader';

const useStyles = makeStyles((theme) => ({
	page: {
    backgroundColor: 'white'
	},
	pageContent: {
		margin: '40px auto',
		marginTop: '-850px',
    paddingBottom: '120px'
	}
}));

export default function Page(props) {
  const classes = useStyles();
  return (
		<Container className={ classes.page }>
			<GlobalHeader inPageKey={ props.inPageKey } />
			<div className={ classes.pageContent }>
        { props.children }
      </div>
		</Container>
  );
}