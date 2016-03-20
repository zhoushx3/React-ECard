import React from 'React'

const PageBlock = React.createClass({

	render() {
		let page = this.props.page
		
		return (
			<div className="page-block">
				<p>内容</p>						
			</div>
		)
	}
})

export default PageBlock