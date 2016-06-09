/*-------------------------------------------
 	DOCUMENT READY FUNCTIONS
 	All functions to be called on
 	doc ready
-------------------------------------------*/
$(document).ready(function() {
  //firebase();
  firebase.initializeApp(config);
  auth.init(constant);
  auth.login();
  auth.register();
  auth.resetPassword();
  db.query();
  toggle();

});

/*-------------------------------------------
  WINDOW RESIZES FUNCTIONS
  All functions to be called on
	window resize
-------------------------------------------*/
$(window).resize(function() {

});
