"use strict";

/* Array.iterate() */
	Array.prototype.iterate = function(callback,invert)
	{
		switch(typeof callback)
		{
			/* Execution */
				case("function"):
					invert = invert || this.reverse();

					for(this.counter = this.length; this.counter-->0;) callback.bind(this,this[this.counter],this.counter)();

					break;
				
			/* Simple Documentation */
				default:
					console.log(`array.iterate(callback,invert)\r\n\r\nthrough an array and executes a callback for each array item\r\n\r\n@param {function} callback Callback executed for each item in the array\r\n@param {boolean} inverse Callback execution is fired in reverse from the last key to the first`);
				
					break;
		}
	};

	/* Testing */
		var arrayTest = [
			"A",
			"B",
			"C",
			"D"
		].iterate();