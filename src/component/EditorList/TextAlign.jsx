import ElementAction from '../../action/ElementAction.js'

const TextAlign = React.createClass({

	render() {
		let textAlign = parseInt(this.props.textAlign)
		let alignItems = [ ['left', '左对齐'], ['center', '居中'], ['right', '右对齐'] ]
		
		let alignBtn = alignItems.map( (align, i)=>{
			let className = align[0] === this.props.textAlign ? 'active' : ''
			return <div key={i} className={ className } onClick={ ElementAction.setStyle.bind(ElementAction, 'textAlign', align[0]) }>{ align[1] }</div>
		})

		return (
			<div id="text-align" className="panel-sub">
				<label>对齐</label>
				<div className="flex-box">
					{ alignBtn }
				</div>
			</div>
		)	
	}
})

export default TextAlign