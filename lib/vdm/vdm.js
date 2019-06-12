"use strict";

/* Import prototypes */
	[
		"Array.last",
		"Array.iterate",
		"Array.remove",
		"Element.index",
		"Element.interactive",
		"Element.visible",
		"Object.extend"
	].forEach(function(_prototype)
	{
		import("./prototypes/" + _prototype + ".js");
	});

