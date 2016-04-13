import ElementAction from '../../action/ElementAction.js'

const PicPanel = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	getInitialState() {
		return {
			src: this.props.element.src,
			srcChanged: false
		}
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId

		switch( element.type ) {
			case 'pic':
				break
			default:
				return null
				break
		}

		return (
			<div className="flex-box pic-panel">
				<input type="file" ref="file" onChange={ this.uploadImg }/>
				<div className="pic">
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
		ElementAction.setStyle('src', this.state.src)
	}
})

export default PicPanel