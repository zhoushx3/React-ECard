import EditorAction from '../action/EditorAction.js'
import MiniCanvas from './CanvasElement/MiniCanvas.jsx'

const PageBlock = React.createClass({
	
	componentDidMount() {
		this.initRightMenu(this.props)
	},

	componentWillReceiveProps(nextProps) {
		this.initRightMenu(nextProps)
	},

	render() {
		let page = this.props.page
		let pageIndex = this.props.pageIndex
		return (
			<div>
				<div className="page-block">
					<MiniCanvas page={ page } />
				</div>
				<div className="cover" onClick={ this.preventInnerClick } data-page={ pageIndex }></div>
			</div>
		)
	},

	initRightMenu(props) {
		let pageIndex = props.pageIndex
		let pageNum = props.pageNum
		$.contextMenu( 'destroy', `[data-page=${pageIndex}]`);
		$.contextMenu({
	      selector: `[data-page=${pageIndex}]`,
	      animation: {duration: 200, show: 'slideDown', hide: 'slideUp'},
	      className: 'contextmenu-custom contextmenu-custom__highlight',
	      // zIndex: function() {
	      // 	return self.zIndex + 1
	      // },
	      items: {
	        delete: {
	        	name: '删除',
	        	disabled: () => {
	        		return pageNum == 1
	        	},
	        	callback: (key, opt) => {
	        		EditorAction.deletePage(pageIndex)
	        	},
	        },
	        moveUp: {
	        	name: '上移',
	        	disabled: () => {
	        		return pageIndex == 0
	        	},
	        	callback: (key, opt)=>{
	        		EditorAction.movePage(pageIndex, -1)
	        	}
	        },
	        moveDown: {
	        	name: '下移',
	        	disabled: ()=>{
	      			return pageIndex == pageNum - 1
	        	},
	        	callback:()=>{
	        		EditorAction.movePage(pageIndex, 1)
	        	}
	        }
	      },
	      trigger: 'right',
	      reposition: true,
	      autoHide: false,
	    })
	},

	preventInnerClick(event) {
		// event.stopPropagation()
		// 防止在左侧修改了画布上的元素
	}
})

export default PageBlock