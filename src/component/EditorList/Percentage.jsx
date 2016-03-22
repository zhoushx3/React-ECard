const Percentage = React.createClass({
	propTypes: {
		type: React.PropTypes.string.isRequired,
	},

	shouldComponentUpdate(nextProps) {
		return nextProps.value !== this.props.value
	},

	setStyle(min, max, event) {
		let value = Number( event.target.value || 0 )
		value = isNaN(value) ? 0 : value
		value = value < 0 ? 0 : value
		value = value > max ? max : value

		switch (this.props.type) {
			case 'opacity':
				this.props.setStyle('opacity', value/100)
				break
			case 'rotate':
				this.props.setStyle('transform', `rotate(${value}deg)`)
				break
		}
	},

	render() {
		let type = this.props.type
		let value = this.props.value
		let min = 0
		let max = 1
		let step = 1
		let name = ''
		switch (type) {
			case 'opacity':
				name = '透明度'
				max = 100
				value = value ? Math.floor(Number(value)*100) : 100
				break
			case 'rotate':
				name = '旋转'
				max = 360
				value = value ? parseInt(value.replace(/[rotate()deg]/ig, '')) : 0
				break
		}

		return (
			<div id="Percentage" className="panel-sub">
				<label>{ name }</label>
				<input type="range" min={ min } max={ max } value={ value } step={ step } onChange={ this.setStyle.bind(null, min, max) }/>
				<input type="number" value={ value } onChange={ this.setStyle.bind(null, min, max) } />
			</div>
		)	
	}
})

export default Percentage