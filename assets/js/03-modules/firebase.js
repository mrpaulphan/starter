// Initialize Firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDTKy-u_xtCWJejH8thMxLoJeku8T83fAk",
  authDomain: "mrpaulphan.firebaseapp.com",
  databaseURL: "https://mrpaulphan.firebaseio.com",
  storageBucket: "project-1628232253751047425.appspot.com",
};

var auth = (function() {
  // Variables
  var loginSubmitButton = $('#loginSubmit'),
    emailInput = $('#loginEmail'),
    passwordInput = $('#loginPassword'),
    loginForm = $('#loginForm');
  return {
    login: function() {
      loginSubmitButton.click(function(e) {
        var email = emailInput.val(),
            password = passwordInput.val();

        // Firebase Authentication
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          console.log('Login Form Error');
          // Prevent form from submitting
          e.preventDefault();
          // Check for errors
          if (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            // Go through error code
            switch (errorCode) {
              case 'auth/invalid-email':
                console.log('Thrown if the email address is not valid.');
                break;
              case 'auth/user-disabled':
                console.log('Thrown if the user corresponding to the given email has been disabled.');
                break;
              case 'auth/user-not-found':
                console.log('Thrown if there is no user corresponding to the given email.');
                break;
              case 'auth/wrong-password':
                console.log('Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.');
                break;
              default:
                console.log('Error');
            }

          } else {
            // Submit form
            console.log('Login successfull');
            loginForm.submit();

          }
        });

      });

    }


  };

})();
var email = 'hey';
var password = 'hey'


// function firebase() {
//
//
//   var baseRef = new Firebase('https://mrpaulphan.firebaseio.com/');
//   var usersRef = new Firebase('https://mrpaulphan.firebaseio.com/users/');
//   var currentUid = localStorage.getItem('uid');
//   var currentUserRef = new Firebase('https://mrpaulphan.firebaseio.com/users/' + currentUid + '/');
//
//   console.log('Current UID: ' + currentUid);
//
//
//
//   $("#registerSubmit").click(function(event) {
//     event.preventDefault(); // cancel default behavior
//     register();
//   })
//
//
//   $(".toggle").click(function(event) {
//     $(".auth__section-form--register").show(100);
//     $(".auth__section-form--login").hide(100);
//
//
//   })
//
//   $(".add-entry").click(function(event) {
//       event.preventDefault(); // cancel default behavio
//
//
//
//     })
//     $("#loginSubmit").click(function(event) {
//       console.log('Clicked on login button');
//
//       // Variables
//       var email = $("#loginEmail"),
//         emailValue = email.val(),
//         pw = $("#loginPw"),
//         pwValue = pw.val()
//
//       baseRef.authWithPassword({
//         email: emailValue,
//         password: pwValue
//       }, function(error, authData) {
//         if (error) {
//           event.preventDefault(); // cancel default behavior
//
//           console.log("Login Failed!", error);
//         } else {
//
//           // Store
//           console.log('Storing UID');
//           localStorage.setItem("uid", authData.uid);
//           console.log("Authenticated successfully with payload:", authData);
//
//         }
//       });
//     })
//
//     $("#logOut").click(function(event) {
//       console.log('clicked logout. Running logout()');
//       logout();
//     })
//
//     function logout() {
//       if (currentUid == null) {
//         console.log('No current UID');
//       } else {
//         console.log('Loged out. Removed UID from storage');
//         localStorage.removeItem('uid');
//       }
//     }
//
//     function register() {
//       // Variables
//       var email = $("#registerEmail"),
//         emailValue = email.val(),
//         pw = $("#registerPw"),
//         pwValue = pw.val(),
//         username = $('#registerUsername'),
//         usernameValue = username.val()
//
//       baseRef.createUser({
//         email: emailValue,
//         password: pwValue,
//         username: usernameValue,
//       }, function(error, userData) {
//         if (error) {
//           console.log("Error creating user:", error);
//         } else {
//           console.log("Successfully created user account with uid:", userData.uid);
//           console.log('Storing UID', userData.uid);
//           localStorage.setItem("uid", userData.uid);
//
//           console.log('User is registered with Email: ' + emailValue + ', Username' + usernameValue);
//           // Create user reference
//           usersRef.child(userData.uid).set({
//             email: emailValue,
//             provider: pwValue,
//             startWeek: 'Sunday',
//             username: usernameValue
//           });
//
//
//         }
//       });
//     }
//
//
// }
