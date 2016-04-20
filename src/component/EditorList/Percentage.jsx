import ElementAction from '../../action/ElementAction.js'

const Percentage = React.createClass({
	propTypes: {
		type: React.PropTypes.string.isRequired,
	},

	getInitialState() {
		return this.getState(this.props)
	},

	componentWillReceiveProps(nextProps) {
		this.setState(this.getState(nextProps))
	},

	setStyle(event) {
		let min = this.state.min
		let max = this.state.max
		let value = event.target.value || 0
				value = Number( value )
				value = isNaN(value) ? 0 : value
				value = value < min ? 0 : value
				value = value > max ? max : value
		this.setState({
			value: value
		}, ()=>{
			ElementAction.setStyle(this.props.type, value)
		})
	},

	render() {
		let value = this.state.value
		let min = this.state.min
		let max = this.state.max
		let step = this.state.step
		let name = this.state.name
		return (
			<div className="flex-box percentage">
				<label>{ name }</label>
				<input type="range" min={ min } max={ max } value={ value } step={ step } onChange={ this.setStyle }/>
				<input type="number" value={ value } onChange={ this.setStyle } ref="number" />
			</div>
		)	
	},

	getState(props) {
		let type = props.type
		let style = props.element['style']
		let min = 0
		let max = 1
		let step = 1
		let name = ''
		let value = 0
		switch (type) {
			case 'opacity':
				name = '透明度'
				max = 100
				value = style['opacity']
				value = value ? Math.floor(Number(value)*100) : 100
				break
			case 'rotate':
				name = '旋转'
				max = 360
				value = style['transform']
				value = value ? parseInt(value.replace(/[rotate()deg]/ig, '')) : 0
				break
		}
		let o =  {
			value: value,
			min: min,
			max: max,
			step: step,
			name: name
		}
		return o
	},
})

export default Percentage