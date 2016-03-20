
export default (()=>{
	if (window.addEventListener) {
		return (ele, event, func, bubble=false) => {
			ele.addEventListener(event, func, bubble)
		} 
	}

	if (window.attachEvent) {
		return (ele, event, func) => {
			ele.attachEvent('on'+event, func)
		}
	}

	return (ele, func) => {
		ele.on[event] = func
	}

})()

