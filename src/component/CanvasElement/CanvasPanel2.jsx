import Pic from './Pic.jsx'
import Text from './Text.jsx'
import Form from './Form.jsx'
import Flip3D from './Flip3D.jsx'
import MyVideo from './MyVideo.jsx'
import Background from './Background.jsx'
import Constant from '../../constant/Constant.js'

import EditorAction from '../../action/EditorAction.js'
import '../../static/stylus/CanvasPanel.stylus'

const CanvasPanel = React.createClass({
	propTypes: {
		page: React.PropTypes.object.isRequired
	},

	render() {
		let selectElementId = this.props.selectElementId
		let page = this.props.page
		let contents = page.content
		let pageEffect = `${page.pageEffect} animated`
		let pageIndex = this.props.pageIndex
		let pageNum = this.props.pageNum
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
			<div className={ pageEffect }>
				<div id="canvas2" style={ this.style() }>
					{ elements }
					<div className={ pageIndex == 0 ? 'toPrevPage' : 'toPrevPage active' } onClick={ this.changePage.bind(this, -1) }>上一页</div>
					<div className={ pageIndex == pageNum-1 ? 'toNextPage' : 'toNextPage active' } onClick={ this.changePage.bind(this, 1) }>下一页</div>
				</div>
			</div>
		)
	},

	style() {
		let width = Constant.SCREEN_WIDTH - Constant.PAGE_PANEL_WIDTH - Constant.EDITOR_PANEL_WIDTH - 100
		let height = width * Constant.SCREEN_HEIGHT / Constant.SCREEN_WIDTH
		let scale = Constant.SCREEN_WIDTH / width
		return {
			width: width + 'px',
			height: height + 'px',
			transform: `scale(${scale})`,
			'transformOrigin': '0 0 0'
		}
	},

	changePage(direction) {
		EditorAction.changePage(this.props.pageIndex + direction)
	}

})

export default CanvasPanel;