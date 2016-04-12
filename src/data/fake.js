// 初始的全局模拟数据
var json = {
	page: [{
		content: {
      "0": {
        "type": "background",
        "backgroundEffect": {
        	enable: true,
        	light: '#111122',
        	back: '#FF0022'
        }, // 背景特效
        "style": {
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "backgroundColor": "#fff",
          "zIndex": 0
        }
      },
			// "1": {
			// 	type: 'flip3D',
			// 	style: {
			// 		left: '100px',
			// 		top: '100px',
			// 		width: '200px',
			// 		height: '300px',
			// 	},
			// 	src: 'src/static/images/1.jpg',
			// 	text: 'mouse',
			// 	effect: {
			// 		in: null
			// 	}
			// }
		},
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
/*
模板分两种：
1. 一个模板即一个元素，会有单独的编辑板块，而不管这个而模板内有什么元素
2. 一个模板由多个元素组成，每个元素有单独的编辑板块, 并且含有这个模板的Id作为联系依据。
*/
		// {
		// 	type: 'pic',
		// 	style: {},
		// 	effect: {
		// 		in: null,
		// 		// out: null,暂时不考虑出场动画
		// 	},
		// },
		// {
		// 	type: 'text',
		// 	content: `梦里梦到醒不来的梦, 红线里被软禁的红.所有刺激剩下疲乏的痛, 再无动于衷.
		// 						从背后抱你的时候, 期待的却是她的面容.
		// 						说来实在嘲讽,我不太懂, 偏渴望你懂.
		// 						是否幸福轻得太沉重.`,
		// 	style: {
		// 		left: '10px',
		// 		top: '10px',
		// 		color: '#000',
		// 		width: '200px',
		// 		height: '300px',
		// 		fontSize: '16px',
		// 		textAlign: 'left',
		// 		lineHeight: '20px',
		// 		letterSpacing: '4px',
		// 	},
		// 	effect: {
		// 		in: {
		// 			effect: 'bounceIn'
		// 		}
		// 		// out: null
		// 	},
		// 	// 是否碎字
		// 	lettering: {
		// 		effect: 'bounceIn',
		// 		delay: 130,
		// 		initDelay: 100
		// 	}
		// },