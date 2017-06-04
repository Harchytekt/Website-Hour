$(document).ready(function() {
	// Initialization of the variables.
	var d           = new Date();
	var h           = addZero(d.getHours()).toString();
	var m           = addZero(d.getMinutes()).toString();
	var s           = addZero(d.getSeconds());
	var currentTime = h + m;
	var timeToWait  = (60 - s) * 1000;
	var current;
	displayTime();

	/**
	 * Adds a zero if the given number is lower than 10.
	 */
	function addZero(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}

	/**
	 * Calls the changeForm() function to display the right digit at right place.
	 */
	function displayTime() {
		for (var i = 0; i < 4; i++) {
			current = currentTime.substr(i, 1);
			if (i == 0) {
				changeForm('.hour-tens', current);
			} else if (i == 1) {
				changeForm('.hour-units', current);
			} else if (i == 2) {
				changeForm('.minute-tens', current);
			} else {
				changeForm('.minute-units', current);
			}
		}
	}

	/**
	 * From the item and the time given as parameters,
	 * this function displays the linked digit.
	 */
	function changeForm(item, time) {
		if (time % 10 == 0) {
			$(item).attr('id', 'zero');
		} else if (time % 10 == 1) {
			$(item).attr('id', 'one');
		} else if (time % 10 == 2) {
			$(item).attr('id', 'two');
		} else if (time % 10 == 3) {
			$(item).attr('id', 'three');
		} else if (time % 10 == 4) {
			$(item).attr('id', 'four');
		} else if (time % 10 == 5) {
			$(item).attr('id', 'five');
		} else if (time % 10 == 6) {
			$(item).attr('id', 'six');
		} else if (time % 10 == 7) {
			$(item).attr('id', 'seven');
		} else if (time % 10 == 8) {
			$(item).attr('id', 'eight');
		} else {
			$(item).attr('id', 'nine');
		}
	}

	// Refreshes the page when the new minute arrives.
	setTimeout(function() {
		location.reload();
	}, timeToWait);

});
