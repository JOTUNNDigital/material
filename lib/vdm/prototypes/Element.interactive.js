"use strict";

/*
 * Element.interactive
 *
 * Determine if an element is interactive.
 *
 * @return {Boolean} Returns if an element is interactable in any way by the end user.
 */
	window.Object.defineProperty(Element.prototype, "interactive",
	{
		get: function()
		{
			return (this && ((this.nodeName === "A" || ((this.nodeName === "BUTTON" || this.nodeName === "INPUT" || this.nodeName === "SELECT" || this.nodeName === "TEXTAREA" || this.contentEditable) && !this.disabled)) || (this.tabIndex && this.tabIndex > 0))) ? true : false;
		}
	});
