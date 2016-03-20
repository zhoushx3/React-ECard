// 初始的全局模拟数据
var json = {
	page: [{
		content: [{
			type: 'pic',
			style: '',
			effect: ['', ''],
		}, {
			type: 'text',
			content: 'hello man',
			style: {
				left: '100px',
				top: '100px',
				color: '#aaa',
				width: '100px',
				height: '30px',
				fontSize: '16px'
			},
			effect: ''
		}],
		pageEffect: ''
	}],
	version: 1
}

export default json;

/*
新建项目需要初始化一定的数据结构，可以省去最开始
的一些字段判断
保证项目至少有一页
*/
