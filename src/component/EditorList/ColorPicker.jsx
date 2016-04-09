import '../../lib/spectrum.js'
import '../../lib/spectrum.css'

const ColorPicker = React.createClass({

	componentDidMount() {
		this.spectrumInit()
	},

	componentWillUnmount() {
		this.spectrumObj.spectrum('destroy')
	},

	spectrumInit() {
		this.spectrumObj && this.spectrumObj.spectrum("destroy")
		this.spectrumObj = $(this.refs.color).spectrum({
		color: this.props.value,
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
    $(this.refs.color).on('change.spectrum', this.changeColor)
    $(this.refs.color).on('move.spectrum', this.changeColor)
	},

	changeColor() {
		this.spectrumObj.spectrum('destroy')
		this.spectrumInit()
	},

	render() {
		return (
			<input type="text" ref="color" />
		)
	}
})

export default ColorPicker