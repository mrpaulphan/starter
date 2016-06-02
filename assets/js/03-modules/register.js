// function register() {
//   // Variables
//   var email = $("#registerEmail"),
//     emailValue = email.val(),
//     pw = $("#registerPw"),
//     pwValue = pw.val(),
//     username = $('#registerUsername'),
//     usernameValue = username.val()
// console.log(baseRef);
//   baseRef.createUser({
//     email: emailValue,
//     password: pwValue,
//     username: usernameValue,
//   }, function(error, userData) {
//     if (error) {
//       console.log("Error creating user:", error);
//     } else {
//       console.log("Successfully created user account with uid:", userData.uid);
//       console.log('Storing UID', userData.uid);
//       localStorage.setItem("uid", userData.uid);
//
//       console.log('User is registered with Email: ' + emailValue + ', Username' + usernameValue);
//       // Create user reference
//       usersRef.child(userData.uid).set({
//         email: emailValue,
//         provider: pwValue,
//         startWeek: 'Sunday',
//         username: usernameValue
//       });
//
//
//     }
//   });
// }
