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
		
		return {
			'width': width + 'px',
			'height': height + 'px',
			'maxWidth': Constant.SCREEN_WIDTH + 'px',
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
					elements.push(<Background key={i} element={ element } elementId={ i } selectElementId={selectElementId} />)
					break
				case 'text':
					elements.push(<Text key={i} element={ element } elementId={ i } selectElementId={selectElementId} />)
					break
				case 'pic':
					elements.push(<Pic key={i} element={ element } elementId={ i } selectElementId={selectElementId} />)
					break
				case 'flip3D':
					elements.push(<Flip3D key={i} element={ element } elementId={ i } selectElementId={selectElementId} />)
					break
				case 'form':
					elements.push(<Form key={i} element={ element } elementId={ i } selectElementId={selectElementId} />)
					break
				case 'video':
					elements.push(<MyVideo key={i} element={ element } elementId={ i } selectElementId={selectElementId} />)
					break
				default :
					break
			}
		}

		return (
			<div id="canvasPanel" className={ pageEffect }>
				<div id="canvas" style={ this.style() }>
					{ elements }
				</div>
			</div>
		)
	}
})

export default CanvasPanel;