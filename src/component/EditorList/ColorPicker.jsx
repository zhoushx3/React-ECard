import '../../lib/spectrum.js'
import '../../lib/spectrum.css'
import ElementAction from '../../action/ElementAction.js'


const ColorPicker = React.createClass({
	valid: true, // 用于判断元素类型是否需要调色器
	colorType: 'backgroundColor',

	componentDidMount() {
		this.valid && this.spectrumInit()
	},

	componentWillUnmount() {
		this.valid && this.spectrumObj.spectrum('destroy')
	},
 
	componentWillReceiveProps(nextProps) {
		if (this.props.element !== nextProps.element || this.props.elementId !== nextProps.elementId) {
			this.checkType()
			this.valid && this.spectrumInit()
		}
	},

	checkType() {
		let validTypes = ['background']
		switch( this.props.element.type ) {
			case 'background':
				this.valid = true
				this.colorType = 'backgroundColor'
				break
			default:
				this.valid = false
				break
		}
	},

	render() {
		let element = this.props.element
		this.checkType()
		if ( !this.valid )
			return null

		return (
			<input type="text" ref="color" />
		)
	},

	spectrumInit() {
		this.spectrumObj && this.spectrumObj.spectrum("destroy")
		this.spectrumObj = $(this.refs.color).spectrum({
		color: this.props.element.style[this.colorType],
		showInput: true,
    showAlpha: true,
    allowEmpty: true,
    showPalette: false,
    preferredFormat: 'hex',
    showButtons: false,
    clickoutFiresChange: true,
	})
    $(this.refs.color).on('dragstart.spectrum', this.changeColor)
    $(this.refs.color).on('dragstop.spectrum', this.changeColor)
    $(this.refs.color).on('change.spectrum', this.fireChange)
    $(this.refs.color).on('move.spectrum', this.changeColor)
	},

	changeColor(event, color) {
		let newColor = color ? color.toString() : 'rgba(255,255,255,0)'
		console.log(this.colorType)
		ElementAction.setStyle(this.colorType, newColor)
	},

	fireChange() {
		return false
	}
})

export default ColorPicker