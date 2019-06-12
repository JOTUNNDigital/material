"use strict";

/*
 * Element.visible
 *
 * Determine if an element is visible in the viewport.
 *
 * @return {Boolean} Returns if an element is physically visible.
 */
	window.Object.defineProperty(Element.prototype, "visible",
	{
		get: function()
		{
			var element = this;

			while(element && element.nodeType === 1)
			{
				if(element.style && element.style.display === "none" || element.type === "hidden" || (!element.offsetWidth || !element.offsetHeight) || !element.getClientRects().length) return false;

				element = element.parentNode;
			}

			return true;
		}
	});