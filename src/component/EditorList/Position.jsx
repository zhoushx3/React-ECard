import React from 'React'


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
			<div id="position">
				<label>位置</label>
				<label>X<input type="number" value={left} onChange={this.setStyle.bind(null, 'left')} /></label>
				<label>Y<input type="number" value={top}  onChange={this.setStyle.bind(null, 'top')} /></label>
			</div>
		)	
	}
})

export default Position