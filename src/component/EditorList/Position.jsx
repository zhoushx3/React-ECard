import ElementAction from '../../action/ElementAction.js'

const Position = React.createClass({

	render() {
		let element = this.props.element
		let selectElement = this.props.selectElement
		let left = parseInt(element.style.left)
		let top = parseInt(element.style.top)
		let self = this

		// 不符合类型的直接return null, 其他组件也一样
		switch( element.type ) {
			case 'background':
				return null
				break
			default:
				break
		}

		let final = [['left', '横坐标', left], ['top', '纵坐标', top]].map( function(i, j) {
			return 	(
				<div key={j} className="flex-box">
					<label>{ i[1] }</label>
					<input type="number" value={ i[2] } onChange={ self.changeStyle.bind(self, i[0])} />
				</div>
			)
		})

		return (
			<div className="panel-sub position">
				{ final }
			</div>
		)	
	},

	changeStyle(type, event) {
		ElementAction.setStyle(type, event)
	}
})

export default Position