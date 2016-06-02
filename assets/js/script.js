/*-------------------------------------------
 	DOCUMENT READY FUNCTIONS
 	All functions to be called on
 	doc ready
-------------------------------------------*/
$(document).ready(function() {
  //firebase();
  firebase.initializeApp(config);
  auth.login();

});

/*-------------------------------------------
  WINDOW RESIZES FUNCTIONS
  All functions to be called on
	window resize
-------------------------------------------*/
$(window).resize(function() {

});
