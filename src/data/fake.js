// 初始的全局模拟数据
var json = {
	page: [{
		content: [{
			type: 'pic',
			style: {},
			effect: {
				in: null,
				// out: null,暂时不考虑出场动画
			},
		}, {
			type: 'text',
			content: `梦里梦到醒不来的梦, 红线里被软禁的红.所有刺激剩下疲乏的痛, 再无动于衷.
								从背后抱你的时候, 期待的却是她的面容.
								说来实在嘲讽,我不太懂, 偏渴望你懂.
								是否幸福轻得太沉重.`,
			style: {
				left: '10px',
				top: '10px',
				color: '#000',
				width: '200px',
				height: '300px',
				fontSize: '16px',
				textAlign: 'left',
				lineHeight: '20px',
				letterSpacing: '4px',
			},
			effect: {
				in: {
					effect: 'bounceIn'
				}
				// out: null
			},
			// 是否碎字
			lettering: {
				effect: 'bounceIn',
				delay: 130,
				initDelay: 100
			}
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
