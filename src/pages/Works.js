import React, { Component } from 'react';
import ChronologyParts from '../organisms/ChronologyParts';
import { Table, TableCell, TableBody, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

import Header from '../organisms/Header';
import PointText from '../atoms/PointText';

import { WOKRS_DATA } from '../static/constants/WorksData';

/**
 * @props : show Boolean
 */
export default class WorksPage extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div className="worksPage">
				<Header inPageKey='works' />
				<TableContainer>
					<Table aria-label="works table">
						<TableHead>
							<TableRow>
								<TableCell><PointText text='Year' /></TableCell>
								<TableCell><PointText text='Service' /></TableCell>
								<TableCell><PointText text='Comment & Skills' /></TableCell>
								<TableCell>
									<PointText text='Links' />
									<Typography variant='caption'>公開可能なソースや作成資料など</Typography>
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{ WOKRS_DATA.map((item) => (<ChronologyParts item={item} />)) }
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		);
	}
}
