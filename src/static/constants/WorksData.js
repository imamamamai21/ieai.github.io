import { SKILLS, SKILL_ICONS } from './Skills';

export const WOKRS_DATA = [
	{ ////////////////////// 管理ツール ////////////////////////////////////////////
		key: 'nuxt',
		year: '2020',
		service: {
			name: '管理ツールの再設計',
			icon: '',
			link: '',
			content: ''
		},
		comments: [
			'ある社内サービスの管理ツールが古くなったので最新の技術で作り直すこととなりました。',
			'nuxt.js(Vue framework)を使い、デザインに時間を取られないよう運用しやすくしました。',
			'右のソースは作成した雛形のみを公開しています。',
			'多くの人が触るソースになるので、すぐに参加できるような設計にしました。',
			'チーム内で運用しやすくするためにStorybookを使って、ローカル環境でデザイン一覧が見れる&自動更新できるようにしています。',
			'デザインはAtomicDesignを元に設計をすることで、多数の人がいじってもくずれにくい設計になっています。'
		],
		skills: [
			SKILL_ICONS.nuxt, SKILL_ICONS.storybook, SKILL_ICONS.atomicDesign
		],
		sources: [
			{ uri: 'https://github.com/imamamamai21/Nuxt_Vue_Storybook_Atomic', title: '[Git]Nuxt_Vue_Storybook_Atomic' }
		]
	}, { /////////////////// 自動化ツール //////////////////////////////////////////
		key: 'gwork',
		year: '2020-2019',
		service: {
			name: '事務作業の自動化',
			icon: 'https://benri-life.com/wp-content/uploads/2019/02/20170117213517-e1550387142385.png',
			link: '',
			content: '事務作業の多くを自動化しました。'
		},
		comments: [
			'産休明けに事務ワークをする部署に異動した時に、人がする作業の多くを自動化しました。',
			'依頼や進捗をBOTで知らせる / 必要データを集結 / 作業内容の一部をワンクリック化 / など人の作業を減らすためにできることをなるべく行いました。',
			'右のソースのリンクは支障ないレベルで中身を削ったものです。',
			'作った数多くのツールの一部を公開しています。'
		],
		skills: [
			{
				name: 'GoogleAppsScript',
				icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Apps_Script.png'
			}, {
				name: 'Kintone Api',
				icon: 'https://biztel.jp/wp-content/uploads/2020/01/logo_kintone_mark_rgb.png'
			}
		],
		sources: [
			{ uri: 'https://github.com/imamamamai21/GAS_SimplitData', title: '[Git]SimplitData' },
			{ uri: 'https://github.com/imamamamai21/GAS_PCcheckList', title: '[Git]PCcheckList' },
			{ uri: 'https://github.com/imamamamai21/GAS_PCOrderSheet', title: '[Git]PCOrderSheet' },
			{ uri: 'https://github.com/imamamamai21/GAS_DiscardSheet', title: '[Git]DiscardSheet' },
			{ uri: 'https://github.com/imamamamai21/GAS_PcRequestSheet', title: '[Git]PcRequestSheet' },
			{ uri: 'https://github.com/imamamamai21/GAS_GsuiteSheet', title: '[Git]GsuiteSheet' },
			{ uri: 'https://github.com/imamamamai21/GAS_KintonePCData', title: '[Git]KintonePCData' },
			{ uri: 'https://github.com/imamamamai21/GAS_StockListSheet', title: '[Git]StockListSheet' },
			{ uri: 'https://github.com/imamamamai21/GAS_FixedAssetSheet', title: '[Git]FixedAssetSheet' },
			{ uri: 'https://github.com/imamamamai21/GAS_RentalPc', title: '[Git]RentalPc' }
		]
	}, { /////////////////// Ameba WEB Remake ////////////////////////////////////
		key: 'amebaWebRemake',
		year: '2017',
		service: {
			name: 'Ameba WEB / Reactリメイク',
			icon: `${process.env.PUBLIC_URL}/images/worksServiceAmebaWebRemake.png`,
			link: 'https://www.ameba.jp/?sp_redirected=true',
			content: 'Ameba webアプリ(スマートフォン用)'
		},
		comments: [
			'Amebaのwebサイトは開発当初ミニマム設計で始まりました。',
			'それが時を経てその設計のままでは開発コストがかかってしまうということで、設計から作り直すこととなりました。',
			'はじめは2人で始まり、徐々にメンバーを増やしていきました。',
			'メンバーを増やす際に勉強会に使った資料の一部をQiitaにまとめています。→リンク'
		],
		skills: [
			SKILL_ICONS.react, SKILL_ICONS.reactRouter, SKILL_ICONS.typeScript, SKILL_ICONS.node, SKILL_ICONS.atomicDesign
		],
		sources: [
			{ uri: 'https://qiita.com/ikemai/items/aae881e5d14ff2ac0c67', title: '[Qiita]AppShellモデル (プログレッシブ ウェブアプリ)' },
			{ uri: 'https://qiita.com/ikemai/items/7659a2f435fc512fee04', title: '[Qiita]Webアクセシビリティ:' },
			{ uri: 'https://qiita.com/ikemai/items/7ae8bdc6c02d26fb7d1f', title: '[Qiita]Cromeでa11yをチェックする方法' },
			{ uri: 'https://qiita.com/ikemai/items/38126c549336598862c1', title: '[Qiita]js恐怖症がTypeScriptを触ってみた' }
		]
	}, { /////////////////// Ameba WEB ///////////////////////////////////////////
		key: 'amebaWeb',
		year: '2015-2017',
		service: {
			name: 'Ameba WEB',
			icon: `${process.env.PUBLIC_URL}/images/worksServiceAmebaWeb.png`,
			link: 'https://www.ameba.jp/?sp_redirected=true',
			content: 'Ameba webアプリ(スマートフォン用)'
		},
		comments: [
			'私が関わったサービスの中で最も歴史あるサービスでした。',
			'いちファイル4000行もあるものもあり、言語もオリジナルで作ったchikuwa.jsを使っていたので参画に苦労しました。',
			'それまでアプリ側など見た目の部分ばかりをいじっていましたが、このチームではNode.jsを使った中間サーバーやJenkinsを使った管理など、自身で行うことが多くなり、見識を広げた時期でした。'
		],
		skills: [
			{
				name: 'Chikuwa.js',
				icon: 'https://img.icons8.com/ios/452/c.png'
			}, SKILL_ICONS.node, SKILL_ICONS.jquery, SKILL_ICONS.jenkins
		],
		sources: []
	}, { /////////////////// Ameba iOSアプリ //////////////////////////////////////
		key: 'amebaiOS',
		year: '2015',
		service: {
			name: 'Ameba iOSアプリ',
			icon: `${process.env.PUBLIC_URL}/images/worksServiceAmebaWeb.png`,
			link: 'https://www.ameba.jp/?sp_redirected=true',
			content: 'Ameba iOSアプリ'
		},
		comments: [
			''
		],
		skills: [
			SKILL_ICONS.swift
		],
		sources: []
	}, { /////////////////// AbemaTV iOSアプリ //////////////////////////////////////
		key: 'abematv',
		year: '2014-2015',
		service: {
			name: 'AbemaTV iOSアプリ',
			icon: 'https://i0.wp.com/necojita.com/wordpress/wp-content/uploads/2017/06/75284.png?fit=1450%2C813',//'https://3.bp.blogspot.com/-luYlmxTRA_0/Vwy2CLf1iRI/AAAAAAABH-U/edrYpf8j2QsyeifWAP1iuAjcwnMwximFQCLcB/s1600/20160412_abematv-00.png`,
			link: 'https://abema.tv/about/premium?utm_medium=ads&utm_source=google&utm_term=AbemaTV_ex&utm_campaign=%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%8D%98%E4%BD%93%E5%AE%8C%E5%85%A8%E4%B8%80%E8%87%B4_201023&gclid=Cj0KCQiA962BBhCzARIsAIpWEL3bmHkv3Yj8z0KWSs7CfK-bNnumZQz5K6ztuQBsBGl8mQiHJOWfgPYaAjU3EALw_wcB',
			content: '無料の動画チャンネル'
		},
		comments: [
			'「新規動画事業を始める」と誘われ、モックを作る段階から関わることができました。',
			'初めてネイティブアプリ制作に関わったサービスです。',
			'iOSはライブラリを多く活用でき、自分自身もpod化してライブラリをいくつか作っていました。'
		],
		skills: [
			SKILL_ICONS.swift, SKILL_ICONS.rxSwift, SKILL_ICONS.typeScript, SKILL_ICONS.objectiveC
		],
		sources: [
			{title: '[Git]ScaledVisibleCellsCollectionView', uri: 'https://github.com/ikemai/ScaledVisibleCellsCollectionView'},
			{title: '[Git]GesturePacker', uri: 'https://github.com/ikemai/GesturePacker'},
			{title: '[Git]ColorAdjuster', uri: 'https://github.com/ikemai/ColorAdjuster' },
			{title: '[Git]FullingSwiper', uri: 'https://github.com/ikemai/FullingSwiper'},,
			{title: '[Git]CastTest', uri: 'https://github.com/ikemai/CastTest'},
			{ title: '[Qiita]使えば便利なSwiftライブラリたち', uri: 'https://qiita.com/ikemai/items/b98e86213625c652a320' }
		]
	}, { //////////////////////////////// 戦国炎舞 //////////////////////////////////////////
		key: 'sengokuenbu',
		year: '2013-2015',
		service: {
			name: '戦国炎舞 - KIZNA -',
			icon: 'https://games.app-liv.jp/images/articles/2019/04/gd_399146_-16.jpg',
			link: 'https://www.sumzap.co.jp/service/sengokuenbu/#page-top',
			content: 'リアルタイム対戦ソーシャルゲーム'
		},
		comments: [
			'就職して初めて関わったサービスはソーシャルゲームでした。',
			'ActionScriptを使ったAIRアプリです。',
			'主な担当はアプリのview側の動き。',
			'時にはアニメーションの作成も行いました。'
		],
		skills: [
			{
				name: 'ActionScript',
				icon: 'https://www.globalonlinetrainings.com/wp-content/uploads/2015/12/ActionScript-3.0-training-.jpg'
			},
			{
				name: 'オブジェクト指向',
				icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7T68EZYJH81rqTKX7EnnJ_hmrVzBuIBKpA&usqp=CAU'
			}
		],
		sources: []
	}
];