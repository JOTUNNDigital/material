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