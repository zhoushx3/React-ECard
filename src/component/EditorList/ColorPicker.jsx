import '../../lib/spectrum.js'
import '../../lib/spectrum.css'
import ElementAction from '../../action/ElementAction.js'


const ColorPicker = React.createClass({

	componentDidMount() {
		this.spectrumInit()
	},

	componentWillUnmount() {
		// this.spectrumObj && this.spectrumObj.spectrum("destroy")
	},

	render() {
		return <input type="text" />
	},

	spectrumInit() {
		let $dom = $(ReactDOM.findDOMNode(this))
		this.spectrumObj && this.spectrumObj.spectrum("destroy")
		this.spectrumObj = $dom.spectrum({
			color: this.props.value,
			showInput: true,
	    showAlpha: true,
	    allowEmpty: true,
	    showPalette: false,
	    preferredFormat: 'hex',
	    showButtons: false,
	    clickoutFiresChange: true,
		})
   	$dom.on('dragstart.spectrum', this.changeColor)
   	$dom.on('dragstop.spectrum', this.changeColor)
   	// $dom.on('change.spectrum', this.fireChange)
   	$dom.on('move.spectrum', this.changeColor)
	},

	changeColor(event, color) {
		let newColor = color ? color.toString() : 'rgba(255,255,255,0)'
		let type = this.props.type
		ElementAction.setStyle(type, newColor)
	},

	fireChange() {
		return false
	},

	modifyBackgroundEffect(event) {
		let checked = event.target.checked
		ElementAction.setStyle('backgroundEffectEnable', checked)
	}
})

export default ColorPicker