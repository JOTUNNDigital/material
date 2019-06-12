"use strict";

/*
 * Array.last()
 *
 * Returns the last item of an array.
 * 
 * @return {Reference} Last item of the array.
 */
	Array.prototype.last = function()
	{
		return (this[this.length - 1]) ? this[this.length - 1] : null;
	};