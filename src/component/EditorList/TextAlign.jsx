import ElementAction from '../../action/ElementAction.js'

const TextAlign = React.createClass({

	render() {
		let element = this.props.element
		let validTypes = ['text']

		if ( validTypes.indexOf(element.type) === -1 )
			return null

		let textAlign = element.style.textAlign
		let alignItems = [ ['left', '左对齐'], ['center', '居中'], ['right', '右对齐'] ]
		
		let alignBtn = alignItems.map( (align, i)=>{
			let className = align[0] == textAlign ? 'active' : ''
			return <div key={i} className={ className } onClick={ ElementAction.setStyle.bind(ElementAction, 'textAlign', align[0]) }>{ align[1] }</div>
		})

		return (
			<div className="flex-box text-align">
				<label>对齐</label>
				{ alignBtn }
			</div>
		)	
	}
})

export default TextAlign