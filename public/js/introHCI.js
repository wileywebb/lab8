'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.btn').click(likeClick);
	// your code here
}

 function likeClick (e) {
	e.preventDefault();
	console.log("rage");
 	ga("send", "event", "like", "click");
 }