import Wrapper from '../Wrapper.jsx'

import '../../static/stylus/form.stylus'

const Form = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	getInitialState() {
		return {
			value1: '',
			value2: ''
		}
	},

	componentDidMount() {
		if (window.location.href.indexOf('viewer') > -1)
			$('.toNextPage').css('visibility', 'hidden')
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId
		let selectElementId = this.props.selectElementId
		let value1 = this.state.value1
		let value2 = this.state.value2

		return (
			<Wrapper element={ element } elementId={ elementId } selectElementId={ selectElementId }>
				<div className="form">
					<input type="text" placeholder={ element.placeholder1 } value={ value1 } onChange={ this.change.bind(this, 'value1') }/>
					<input type="text" placeholder={ element.placeholder2 } value={ value2 } onChange={ this.change.bind(this, 'value2') }/>
          <button id="submit" type="button" onClick={ this.check }>下一页</button>
        </div>
			</Wrapper>
		)
	},

	change(type, event) {
		this.setState({
			[type]: event.target.value
		})
	},

	check() {
		let element = this.props.element
		let ok = true
		if ( element.check1 ) {
			if ( element.value1 != this.state.value1 ) {
				ok = false
			}
		}

		if ( element.check2 ) {
			if ( element.value2 != this.state.value2 ) {
				ok = false
			}
		}

		if (ok) {
			$('.toNextPage').css('visibility', 'visible').click()
		}
		else alert('NO')
	}
})

export default Form


