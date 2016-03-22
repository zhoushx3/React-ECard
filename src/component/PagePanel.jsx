import PageBlock from './PageBlock.jsx'

import '../static/stylus/pagePanel.stylus'

const PagePanel = React.createClass({
	getIntialState() {

	},

	componentWillMount() {

	},

	componentDidMount() {

	},

	render() {
		let page = this.props.json.page.map( (page, index)=>{
			return (
				<li key={ 'page_'+index }>
					<PageBlock page={page} />
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
				<div id="add-blank-page">+</div>
			</div>
		)
	}
})

export default PagePanel;