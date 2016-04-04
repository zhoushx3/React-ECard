import ElementAction from '../../action/ElementAction.js'

const Percentage = React.createClass({
	propTypes: {
		type: React.PropTypes.string.isRequired,
	},

	setStyle(min, max, event) {
		let value = Number( event.target.value || 0 )
		value = isNaN(value) ? 0 : value
		value = value < (this.refs.number.value = 0, 0) ? 0 : value
		value = value > (this.refs.number.value = max, max) ? max : value
		ElementAction.setStyle(this.props.type, value)
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
				<input type="number" value={ value } onChange={ this.setStyle.bind(null, min, max) } ref="number" />
			</div>
		)	
	}
})

export default Percentage