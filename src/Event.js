import { EventEmitter } from 'events'
import assign from 'object-assign'

var EventStore = assign({}, EventEmitter.prototype, {
	emitChange: function(EVENT, ...args){
		this.emit(EVENT, ...args);
	},

	/**
	* @param {function} callback
	*/
	addChangeListener: function(EVENT, callback) {
		this.on(EVENT, callback);
	},

	/**
	* @param {function} callback
	*/
	removeChangeListener: function(EVENT, callback) {
		this.removeListener(EVENT, callback);
	}
});

export default EventStore;