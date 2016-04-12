import ColorPicker from './ColorPicker.jsx'
import ElementAction from '../../action/ElementAction.js'

const Color = React.createClass({
	getInitialState() {
		console.log(4)
		return {
			colorType: [],
			selectElementId: undefined
		}
	},

	componentWillMount() {
		this.changeColorType(this.props)
		console.log(3)

	},

	componentWillReceiveProps(nextProps) {
		this.changeColorType(nextProps)
		console.log(2)
	},

	changeColorType(props) {
		let element = props.element
		let change = false 
		let originalType = this.state.colorType
		let l = originalType.length
		let newType = []

		switch( element.type ) {
			case 'background':
				if ( element.backgroundEffect.enable )
					newType = ['backgroundEffect.light', 'backgroundEffect.back']
				else
					newType = ['style.backgroundColor']
				break
			default:
				break
		}

		if (this.state.selectElementId !== props.selectElementId || newType.length !== originalType.length) {
			change = true
		} else if (newType.length == originalType.length) {
			for (let i = 0; i < l; i += 1) {
				if (newType[i] != originalType[i]) {
					change = true
					break
				}
			}
		}
		if (change) {
			for (let i = 0; i < l; i += 1)
				ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.refs['color_'+i]))
		}
		console.log(newType)
		this.setState({
			colorType: newType,
			selectElementId: props.selectElementId
		})
	},
	componentDidMount() {
		ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.refs['color_0']))
	},

	render() {
		window.ll = this
		let element = this.props.element
		let selectElementId = this.props.selectElementId
		let addition = null

		let pickers = this.state.colorType.map( function(t, i) {
			let type = t.split('.')
			return <ColorPicker ref={ "color_"+i } selectElementId={ selectElementId } key={i} pKey={ type[0] } type={ type[1] } value={ element[type[0]][type[1]] } />
		})

		if ( element.type === 'background') {
			let enable = element.backgroundEffect.enable 
			addition = ( [<input type="checkbox" key="_1" checked={ enable } onChange={ this.modifyBackgroundEffect } />, 
									<label key="_2">添加特效</label>] )
		}

		return (
			<div className="flex-box colorPicker">
				{ pickers }
				{ addition }
			</div>
		)
	},

	modifyBackgroundEffect(event) {
		let checked = event.target.checked
		ElementAction.setStyle('backgroundEffectEnable', checked)
	}
})

export default Color