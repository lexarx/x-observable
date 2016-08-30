var Event = require('x-event');

/**
 * @class Observable<T>
 * @param {T} [value]
 */
function Observable(value) {
	this.changed = new Event();
	this.value = value;
}

var prototype = {
	/**
	 * Sets the value.
	 * @param {T} value
	 */
	setValue: function(value) {
		var oldValue = this.value;
		if (oldValue !== value) {
			this.value = value;
			this.changed.emit(value, oldValue);
		}
		return oldValue;
	},

	/**
	 * Returns the value.
	 * @returns {T} value
	 */
	getValue: function() {
		return this.value;
	}
};

prototype.set = prototype.setValue;
prototype.get = prototype.getValue;
Observable.prototype = prototype;

module.exports = Observable;