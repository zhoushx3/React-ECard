import PageBlock from './PageBlock.jsx'
import EditorAction from '../action/EditorAction.js'

import '../static/stylus/pagePanel.stylus'

const PagePanel = React.createClass({
	getIntialState() {

	},

	componentWillMount() {

	},

	componentDidMount() {

	},

	render() {
		let pages = this.props.json.page
		let currentPageIndex = this.props.pageIndex
		let page = pages.map( (page, index)=>{
			return (
				<li key={ 'page_'+index } className={ index == currentPageIndex ? 'active' : '' } onClick={ this.changePage.bind(this, index) }>
					<PageBlock page={page} pageIndex={index} pageNum={pages.length} />
					<div className="page-num">{ index+1 }</div>
				</li>
			)
		})

		return (
			<div id="pagePanel">
				<div id="yemian">页面</div>
				<ul id="page-container">
					{ page }
				</ul>
				<div id="add-blank-page" onClick={ this.addPage }>+</div>
			</div>
		)
	},

	addPage() {
		EditorAction.addPage()
	},

	changePage(pageIndex) {
		EditorAction.changePage(pageIndex)
	}
})

export default PagePanel;