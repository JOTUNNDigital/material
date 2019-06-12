"use strict";

/* 
 * Object.extend(extender[,extender2,...])
 *
 * Allows two or more Objects to be merged, with duplicates keys being overwritten.
 *
 * @param {Object} extender Object to be merged with.
 * 
 * @return {Object} Merged object.
 */
	Object.prototype.extend = function()
	{
		var a = this,
		b = false,
		i = 0,
		c = arguments.length;

		if(Object.prototype.toString.call(arguments[0]) === "[object Boolean]")
		{
			b = arguments[0];

			i++;
		}

		var d = function(e)
		{
			for(var f in e) if(Object.prototype.hasOwnProperty.call(e, f)) a[f] = (b && Object.prototype.toString.call(e[f]) === "[object Object]") ? __extend(true, a[f], e[f]) : e[f];
		};

		for(; i < c; i++)
		{
			var e = arguments[i];

			d(e);
		}

		return a;
	};

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

/*
 * Array.remove(rerence[,reference2,...])
 *
 * Removes an item from an array via direct reference. This permanently alters the array.
 *
 * @param {Reference} 
 */
	Array.prototype.remove = function()
	{
		var s, n, a = arguments;
		var l = a.length;

		while(l && this.length)
		{
			s = a[--l];

			while((n = this.indexOf(s)) !== -1) this.splice(n, 1);
		}

		return this;
	};

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
		switch(typeof callback)
		{
			case("function"):
				invert = invert || this.reverse();

				for(this.counter = this.length; this.counter-->0;) callback.bind(this,this[this.counter],this.counter)();

				break;
		}
	};