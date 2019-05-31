"use strict";

var mdc = {
	cssClassRoot: "mdc-",
	base: {
		component: {
			load: function(components)
			{
				if(!components) return null;
				
				switch(typeof components)
				{
					case "string":
						components = components.split(",");
						
						return components;
						break;
					
					default:
						console.error("parameter `components` expects string (" + typeof components + " given).");
					
						break;
				}
			}
		},
		foundation: {
			cssClasses: function()
			{
				var classes = this.getAttribute("class").split(" ").reverse(),
				structured = {};
				classes.limit = classes.length;
				
				if(classes.limit == 1)
				{
					classes.push(classes[0].split(/__|--/g)[0]);					
					classes.limit = 2;
				}
				
				while(classes.limit--)
				{
					var cssClass = classes[classes.limit],
					cssId = null;

					if(!/--|__/g.test(cssClass))
						cssId = "root";

					else if(/__/g.test(cssClass) && !/--/g.test(cssClass))
						cssId = cssClass.split(/__/g)[1].replace(/-/g,"_");

					else if(!/__/g.test(cssClass) && /--/g.test(cssClass))
						cssId = cssClass.split(/--/g)[1].replace(/-/g,"_");

					else if(/__/g.test(cssClass) && /--/g.test(cssClass))
					{
						cssId = cssClass.split(/__/g)[1].split(/--/g)[1].replace(/-/g,"_");

						var cssSecondaryComponent = cssClass.split(/__/g)[1].split(/--/g)[0].replace(/-/g,"_");

						structured[cssSecondaryComponent.toUpperCase()] = classes[classes.limit];
					}

					if(cssId)
						structured[cssId.toUpperCase()] = classes[classes.limit];
				}

				return (Object.keys(structured).length) ? structured : null;
			}
		}
	}
};

document.addEventListener("DOMContentLoaded", function()
{
	var elements = document.querySelectorAll("[class*='mdc-']"),
	keys = Object.keys(mdc.base.foundation);

	for(var i = elements.length; i-->0;)
	{
		for(var j = keys.length; j-->0;)
		{
			elements[i][keys[j]] = mdc.base.foundation[keys[j]];
		}
	}
});