const Position = React.createClass({

	shouldComponentUpdate(nextProps) {
		return nextProps.left !== this.props.left || nextProps.top !== this.props.top
	},

	setStyle(property, event) {
		this.props.setStyle(property, (event.target.value || 0)+'px')
	},

	render() {
		let left = parseInt(this.props.left)
		let top = parseInt(this.props.top)

		return (
			<div id="position" className="panel-sub">
				<div className="flex-box">
					<label>横坐标</label>
					<input type="number" value={left} onChange={this.setStyle.bind(null, 'left')} />
				</div>
				<div className="flex-box">
					<label>纵坐标</label>
					<input type="number" value={top}  onChange={this.setStyle.bind(null, 'top')} />
				</div>
			</div>
		)	
	}
})

export default Position