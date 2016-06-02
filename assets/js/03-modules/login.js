// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
// function login(baseRef) {
//   // Variables
//   var email = $("#loginEmail"),
//     emailValue = email.val(),
//     pw = $("#loginPw"),
//     pwValue = pw.val()
//
//   baseRef.authWithPassword({
//     email: emailValue,
//     password: pwValue
//   }, function(error, authData) {
//     if (error) {
//       event.preventDefault(); // cancel default behavior
//
//       console.log("Login Failed!", error);
//     } else {
//
//       // Store
//       console.log('Storing UID');
//       localStorage.setItem("uid", authData.uid);
//       console.log("Authenticated successfully with payload:", authData);
//
//     }
//   });
// }
