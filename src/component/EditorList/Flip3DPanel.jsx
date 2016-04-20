import ElementAction from '../../action/ElementAction.js'

const Flip3DPanel = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	getInitialState() {
		return {
			src: this.props.element.src,
			srcChanged: false
		}
	},

	componentWillReceiveProps(nextProps) {
		this.setState({
			src: nextProps.element.src
		})
	},
	
	render() {
		let element = this.props.element
		let elementId = this.props.elementId
		let text = element.text
		return (
			<div id="flip3D-panel">
				<div className="flex-box text">
					<label>文本</label>
					<textarea placeholder="最多100字" maxLength={100} value={ text } onChange={ ElementAction.setTemplateStyle.bind(ElementAction, 'text')} />
				</div>
				<div className="flex-box pic-panel">
					<input type="file" ref="file" onChange={ this.uploadImg }/>
					<img src={ this.state.src } />
				</div>
			</div>
		)	
	},

	uploadImg(event) {
		this.setState({
			// src: this.refs.file.files[0].getAsDataURL() 火狐7-
			src: window.URL.createObjectURL(this.refs.file.files[0]), // 火狐7+
			srcChanged: true
		}, this.changeImg)
	},

	changeImg() {
		if ( !this.state.srcChanged )
			return
		ElementAction.setTemplateStyle('src', this.state.src)
	}
})

export default Flip3DPanel