import React, { Component } from 'react';
import ChronologyParts from '../organisms/ChronologyParts';
import { Table, TableCell, TableBody, TableContainer, TableHead, TableRow, Button, ButtonBase, Typography, Link, Grid, SvgIcon } from '@material-ui/core';

/**
 * @props : show Boolean
 */
export default class WorksPage extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		if(!this.props.show) return <div />
		return (
			<TableContainer>
				<Table aria-label="works table">
					<TableHead>
						<TableRow>
							<TableCell>Year</TableCell>
							<TableCell>Service</TableCell>
							<TableCell>Comment</TableCell>
							<TableCell>Skills</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ CONTENT_SET.map((item) => (<ChronologyParts item={item} />)) }
					</TableBody>
				</Table>
			</TableContainer>
		);
	}
}

const CONTENT_SET = [
	{
		key: 'sengokuenbu',
		year: '2013',
		service: {
			name: '戦国炎舞 - KIZNA -',
			icon: 'https://i.ytimg.com/vi/UaNgJkSyofk/maxresdefault.jpg',
			link: 'https://www.sumzap.co.jp/service/sengokuenbu/#page-top',
			content: 'リアルタイム対戦ソーシャルゲーム'
		},
		comment: '就職して初めて関わったサービスはゲームでした。ActionScriptを使ったAIRアプリです。主な担当はアプリのview側の動きです。時にはアニメーションの作成も行いました。',
		skills: [
			{
				name: 'ActionScript',
				icon: 'https://www.globalonlinetrainings.com/wp-content/uploads/2015/12/ActionScript-3.0-training-.jpg'
			},
			{
				name: 'オブジェクト指向',
				icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7T68EZYJH81rqTKX7EnnJ_hmrVzBuIBKpA&usqp=CAU'
			}
		]
	}
];