import ElemnetAction from '../../action/ElementAction.js'

const FormPanel = React.createClass({
	propTypes: {
		element: React.PropTypes.object.isRequired
	},

	getInitialState() {
		return this.getState(this.props)
	},

	componentWillReceiveProps(nextProps) {
		this.setState( this.getState(nextProps) )
	},

	getState(props) {
		let element = props.element
		return {
			value1: element.value1,
			placeholder1: element.placeholder1,
			check1: element.check1,
			value2: element.value2,
			placeholder2: element.placeholder2,
			check2: element.check2,
		}
	},

	render() {
		let value1 = this.state.value1
		let placeholder1 = this.state.placeholder1
		let check1 = this.state.check1
		let value2 = this.state.value2
		let placeholder2 = this.state.placeholder2
		let check2 = this.state.check2
		return (
			<div id="form-panel">
				<div className="flex-box form-panel">
					<label>提示</label>
					<input type="text" value={ placeholder1 } onChange={ this.setCheck.bind(this, 'placeholder1') }/>
					<label>答案</label>
					<input type="text" value={ value1 } onChange={ this.setCheck.bind(this, 'value1') }/>
					<label>检查否</label>
					<input type="checkbox" checked={check1} onChange={ this.setCheck.bind(this, 'check1') }/>
				</div>
				<div className="flex-box form-panel">
					<label>提示</label>
					<input type="text" value={ placeholder2 } onChange={ this.setCheck.bind(this, 'placeholder2') }/>
					<label>答案</label>
					<input type="text" value={ value2 } onChange={ this.setCheck.bind(this, 'value2') }/>
					<label>检查</label>
					<input type="checkbox" checked={check2} onChange={ this.setCheck.bind(this, 'check2') }/>
				</div>
			</div>
		)
	},

	setCheck(type, event) {
		let value = event.target.value
		if (type == 'check2' || type == 'check1') {
			value = event.target.checked
		}
		this.setState({
			[type]: value
		}, ()=>{
			ElemnetAction.setStyle(type, value)
		})
	},

})

export default FormPanel


