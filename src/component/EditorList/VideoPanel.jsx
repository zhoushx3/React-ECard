import ElementAction from '../../action/ElementAction.js'

const VideoPanel = React.createClass({
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
		if (nextProps.element.type !== 'video')
			return
		this.setState({
			src: nextProps.element.src
		})
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId


		switch( element.type ) {
			case 'video':
				break
			default:
				return null
				break
		}

		return (
			<div className="flex-box video-panel">
				<label>选择视频</label>
				<input type="file" ref="file" onChange={ this.uploadImg }/>
				<input type="button" value="确认" onClick={ this.uploadSource } />
			</div>
		)	
	},

	uploadSource() {
		let files = this.refs.file.files
		if (!files.length)
			return
		if (files[0].type.indexOf('video') == -1)
			return
		this.setState({
			// src: this.refs.file.files[0].getAsDataURL() 火狐7-
			src: 'src/static/' + files[0].name, // 火狐7+
			srcChanged: true
		}, this.changeSource)
	},

	changeSource() {
		if ( !this.state.srcChanged )
			return
		ElementAction.setStyle('src', this.state.src)
	}
})

export default VideoPanel