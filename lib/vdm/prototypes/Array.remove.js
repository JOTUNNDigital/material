"use strict";

/*
 * Array.remove(rerence[,reference2,...])
 *
 * Removes an item from an array via direct reference. This permanently alters the array.
 * References are type-specific (e.g. ["1",1].remove("1") will remove the first key, but not the second due to type mismatch).
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
