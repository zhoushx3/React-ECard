import Pic from './Pic.jsx'
import Text from './Text.jsx'
import Form from './Form.jsx'
import Flip3D from './Flip3D.jsx'
import MyVideo from './MyVideo.jsx'
import Background from './Background.jsx'
import Constant from '../../constant/Constant.js'

import '../../static/stylus/CanvasPanel.stylus'

const CanvasPanel = React.createClass({
	propTypes: {
		page: React.PropTypes.object.isRequired
	},

	style() {
		let width = Constant.SCREEN_WIDTH - Constant.PAGE_PANEL_WIDTH - Constant.EDITOR_PANEL_WIDTH - 100
		let height = width * Constant.SCREEN_HEIGHT / Constant.SCREEN_WIDTH
		let scale = 130 / width// 130是pageBlock的内容宽度
		return {
			'width': width + 'px',
			'height': height + 'px',
			'position': 'relative',
			transform: `scale(${scale})`,
			transformOrigin: '0 0 0',
		}
	},

	render() {
		let pageEffect = `${this.props.page.pageEffect} animated`
		let contents =this.props.page.content
		let selectElementId = this.props.selectElementId
		let elements = []
		for (let i in contents) {
			let element = contents[i]
			switch(element.type) {
				case 'background':
					elements.push(<Background key={i} element={ element } elementId={ i } />)
					break
				case 'text':
					elements.push(<Text key={i} element={ element } elementId={ i } />)
					break
				case 'pic':
					elements.push(<Pic key={i} element={ element } elementId={ i } />)
					break
				case 'flip3D':
					elements.push(<Flip3D key={i} element={ element } elementId={ i } />)
					break
				case 'form':
					elements.push(<Form key={i} element={ element } elementId={ i } />)
					break
				case 'video':
					elements.push(<MyVideo key={i} element={ element } elementId={ i } />)
					break
				default :
					break
			}
		}

		return (
			<div id="miniCanvas" style={ this.style() }>
				{ elements }
			</div>
		)
	}
})

export default CanvasPanel;