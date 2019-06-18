"use strict";

/* Establish Monolithic VDM Object */
	window["VDM"] = {
		"Version": "7.0.1",
		"Supports": {
			"canvas": !!document.createElement('canvas').getContext,
			"ES6": (typeof Symbol == "undefined") ? false : true,
			"touch": new Boolean("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0)
		}
	};

/* Import prototypes */
	[
		"array.last",
		"array.iterate",
		"array.remove",
		"element.index",
		"element.interactive",
		"element.visible",
		"object.extend"
	].forEach(function(_import)
	{
		import("./prototypes/" + _import + ".js");
	});

/* Import functionality */
	[
		"content/load.js"
	].forEach(function(_import)
	{
		import("./functions/" + _import + ".js");
	});