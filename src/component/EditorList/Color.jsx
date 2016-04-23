import ColorPicker from './ColorPicker.jsx'
import ElementAction from '../../action/ElementAction.js'

const Color = React.createClass({
	getInitialState() {
		return {
			colorType: [],
			selectElementId: undefined
		}
	},

	componentWillMount() {
		this.changeColorType(this.props)
	},

	componentWillReceiveProps(nextProps) {
		this.changeColorType(nextProps)
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
			case 'text':
				newType = ['style.color', 'style.backgroundColor']
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
		if (change && originalType.length) {
			// 指定parentNode应该是因为unmount的点应该从父节点处砍断
			ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.sub).parentNode)
		}
		this.setState({
			colorType: newType,
			selectElementId: props.selectElementId
		})
	},

	addComponent() {
		let selectElementId = this.props.selectElementId
		let element = this.props.element

		let pickers = this.state.colorType.map( function(t, i) {
			let type = t.split('.')
			return <ColorPicker selectElementId={ selectElementId } key={i} pKey={ type[0] } type={ type[1] } value={ element[type[0]][type[1]] } />
		})
		pickers = (
			<div>
			{ pickers }
			</div>
		)
		this.sub = ReactDOM.render(pickers, this.refs.con)
		// 这种挂载方式是为了每次需要更新Colorpicker的时候卸载能指定对象
		// http://stackoverflow.com/questions/21662153/unmounting-react-js-node
	},

	componentDidMount() {
		this.addComponent()
	},

	componentDidUpdate() {
		this.addComponent()
	},

	render() {
		window.ll = this
		let element = this.props.element
		let selectElementId = this.props.selectElementId
		let addition = null

		if ( element.type === 'background') {
			let enable = element.backgroundEffect.enable 
			addition = ( [<input type="checkbox" key="_1" checked={ enable } onChange={ this.modifyBackgroundEffect } />, 
									<label key="_2">添加特效</label>] )
		}

		return (
			<div className="flex-box colorPicker">
				<div ref="con"></div>
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