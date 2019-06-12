"use strict";

/*
 * Element.index
 *
 * Get the numeric index of an element relative to it's parent.
 *
 * @return {Boolean} Returns numeric index of element in relation to it's parent node.
 */
	window.Object.defineProperty(Element.prototype, "index",
	{
		get: function()
		{
			return Array.prototype.indexOf.call(this.parentNode.children, this);
		}
	});