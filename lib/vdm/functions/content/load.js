"use strict";

VDM.Content = VDM.Content || {};
VDM.Content.load = function(targetElement,contentURL)
{
	var net = new XMLHttpRequest();

	net.addEventListener("loadend", function(event)
	{
		switch(net.status)
		{
			/* HTTP Request OK */
			case 200:
				console.log("OK\r\nはい");
				console.log(net.responseText);

				break;
			
			/* Client Offline */
			case 0:
				console.log("Client Offline\r\nクライアントオフライン");

				break;

			/* HTTP Request Error */
			default:
				console.log("HTTP Error\r\nHTTP エラー");

				break;
		}
	});

	net.open("GET", contentURL, true);
	net.send();
};

/* c = function()
{
	return (this[this.length - 1]) ? this[this.length - 1] : null;
}; */