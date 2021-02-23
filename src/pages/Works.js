import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Container, Icon, Typography } from '@material-ui/core';

import Page from '../templates/Page';
import PointText from '../atoms/PointText';
import ChronologyParts from '../organisms/ChronologyParts';

import { WOKRS_DATA } from '../static/constants/WorksData';

const useStyles = makeStyles((theme) => ({
	worksPage: {
	},
	content: { marginTop: 100 },
	title: {
		marginTop: 60,
		textAlign: 'center',
		'& h2': { fontSize: 46, marginBottom: 12 },
		'& .MuiTypography-caption': { margin: 'auto' }
	},
	itemRoot: { flexGrow: 1 }
}));

export default function WorksPage(props) {
	const classes = useStyles();
	return (
		<Page inPageKey='works'>
			<Container maxWidth='lg' className={ classes.worksPage }>
				<Box className={ classes.title }>
					<Container maxWidth='md'>
						<PointText variant='h2'>
							WORKS HISTORY
							<Icon color='primary'>history</Icon>
						</PointText>
						<Typography variant='caption'>
							これまで私が関わったサービスの内容とスキル、あれば公開可能なソースや作成資料などと共に一覧にしています。
						</Typography>
					</Container>
				</Box>
				<Box className={ classes.content }>
					<ul className={ classes.itemRoot }>
						{ WOKRS_DATA.map((item) => (<ChronologyParts item={item} />)) }
					</ul>
				</Box>
			</Container>
		</Page>
	);
}
