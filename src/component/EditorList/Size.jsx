import React from 'React'

const Size = React.createClass({

	shouldComponentUpdate(nextProps) {
		return nextProps.width !== this.props.width || nextProps.height !== this.props.height
	},

	setStyle(property, event) {
		this.props.setStyle(property, (event.target.value || 0)+'px')
	},

	render() {
		let width = parseInt(this.props.width)
		let height = parseInt(this.props.height)

		return (
			<div id="size" className="panel-sub">
				<div className="flex-box">
					<label>宽度</label>
					<input type="number" value={width} onChange={this.setStyle.bind(null, 'width')} />
				</div>
				<div className="flex-box">
					<label>高度</label>
					<input type="number" value={height}  onChange={this.setStyle.bind(null, 'height')} />
				</div>
			</div>
		)	
	}
})

export default Size