import Store from '../store/EditorStore.js'
import '../static/stylus/header.stylus'

const Header = React.createClass({
	render() {
		return (
			<div className="header">
				<a href="viewer.html" target="_blank" id="previewer" onClick={ this.preview }>预览</a>
			</div>
		)
	},

	preview(event) {
		event.preventDefault()
		window.localStorage.setItem('json', JSON.stringify(Store.json))
		window.open('viewer.html')
	}
})

export default Header