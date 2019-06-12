"use strict";

/* 
 * Array.iterate(callback,invert)
 * 
 * Iterate through an array and executes a callback for each array item.
 *
 * @param {function} callback Callback executed for each item in the array.
 * @param {boolean} inverse Callback execution is fired in reverse from the last key to the first.
 */
	Array.prototype.iterate = function(callback,invert)
	{
		invert = invert || this.reverse();

		for(this.counter = this.length; this.counter-->0;) callback.bind(this,this[this.counter],this.counter)();
	};