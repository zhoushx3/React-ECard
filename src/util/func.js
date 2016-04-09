export function px(n) {
	return (typeof n === 'number' || typeof n === 'string') ? parseInt(n)+'px' : 0
}

export function lower(n, limit) {
	return n <= limit ? limit : n
}

export function upper(n, limit) {
	return n <= limit ? n : limit
}

// 勾股定理
export function gouGu(x, y) {
	return Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2))
}

// 拷贝对象
export function deepCopy(source) {
	if ( typeof source !== 'object' || source === null)
		return source

	let isArr = isArray(source)
	let obj = isArr ? [] : {}
	for ( let key in source ) {
			key = isArr ? parseInt(key) : key
			obj[key] = deepCopy( source[key] )
	}
	return obj
}

// 比较 true: 值相同
export function deepCompare(comp1, comp2) {
	if ( typeof comp1 !== 'object' || comp1 === null ) {
		return comp1 === comp2
	}
	let isArr1 = isArray(comp1)
	let isArr2 = isArray(comp2)
	// 若都是数组
	if ( isArr1 && isArr2 ) {
		if ( comp1.length !== comp2.length ) return false
			
		for ( let i = 0; i < comp1.length; i += 1 )
			if ( !deepCompare(comp1[i], comp2[i]) ) return false

		return true
	}
	// 若都不是数组的对象
	if ( !isArr1 && !isArr2 ) {
		if ( Object.keys(comp1).length !== Object.keys(comp2).length ) return false

		for ( let key in comp1 ) {
			if ( !comp2.hasOwnProperty(key) ) return false
			if ( !deepCompare(comp1[key], comp2[key]) ) return false
		}

		return true
	}
	// 一数组一非数组
	return false
}

function isArray(obj) {  
  return Object.prototype.toString.call(obj) === '[object Array]';   
}
