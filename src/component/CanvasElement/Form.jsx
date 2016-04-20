import Wrapper from '../Wrapper.jsx'

import '../../static/stylus/form.stylus'

const Form = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	getInitialState() {
		let element = this.props.element
		return {
			check1: element.value1,
			check2: element.value2
		}
	},

	render() {
		let element = this.props.element
		let elementId = this.props.elementId
		let selectElementId = this.props.selectElementId
		let value1 = element.value1
		let value2 = element.value2

		return (
			<Wrapper element={ element } elementId={ elementId } selectElementId={ selectElementId }>
				<div className="form">
					<input type="text" placeholder={ element.placeholder1 } value={ value1 } />
					<input type="text" placeholder={ element.placeholder2 } value={ value2 } />
          <button id="submit" type="button" onClick={ this.check }>下一页</button>
        </div>
			</Wrapper>
		)
	},

	check() {
		let element = this.props.element
		let ok = true
		if ( element.value1 ) {
			if ( element.value1 != this.state.value1 ) {
				ok = false
			}
		}

		if ( element.check2 ) {
			if ( element.value2 != this.state.value2 ) {
				ok = false
			}
		}

		if (ok) alert('通过')
		else alert('不通过')
	}
})

export default Form


