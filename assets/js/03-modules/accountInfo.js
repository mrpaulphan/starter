function accountInfo(currentUserRef) {
  // Attach an asynchronous callback to read the data at our posts reference
  currentUserRef.on("value", function(snapshot) {
    console.log(snapshot.val());
    var userEmail = snapshot.val().email,
      userUsername = snapshot.val().username,
      userStartWeek = snapshot.val().startWeek,
      accountSettings = $(".user-info")
    console.log(userEmail);
    console.log(userUsername);
    console.log(userStartWeek);



    accountSettings.append("<p>Email: " + userEmail + "</p>");
    accountSettings.append("<p>Username: " + userUsername + "</p>");
    accountSettings.append("<p>Start Week:" + userStartWeek + "</p>");


  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

}
