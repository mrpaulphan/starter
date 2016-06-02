var auth = (function() {
  // Variables
  var loginSubmitButton = $('#loginSubmit'),
    registerSubmitButton = $('#submitRegister'),
    forgetPasswordButton = $('#forgetPassword'),
    emailInput = $('#loginEmail'),
    passwordInput = $('#loginPassword'),
    loginForm = $('#loginForm');
  return {
    /*
    The login function will read the data from the input fields
    and check it with the firebase DB.
    */
    login: function() {
      loginSubmitButton.click(function(e) {
        var email = emailInput.val(),
          password = passwordInput.val();

        // Firebase Authentication
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          e.preventDefault();
          var errorCode = error.code;
          var errorMessage = error.message;
          // Check for errors
          if (error) {
            console.log('Login Form Error');

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

    },
    /*
    The register function will create a new user and check for errors.
    */
    register: function() {
      registerSubmitButton.click(function(e) {
        var email = emailInput.val(),
          password = passwordInput.val();

        // Firebase Authentication
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          e.preventDefault();
          var errorCode = error.code;
          var errorMessage = error.message;

          // Check for errors
          if (error) {
            console.log('Register Error');
            // Go through error code
            switch (errorCode) {
              case 'auth/email-already-in-use':
                console.log('Thrown if there already exists an account with the given email address.');
                break;
              case 'auth/invalid-email':
                console.log('Thrown if the email address is not valid.');
                break;
              case 'auth/operation-not-allowed':
                console.log('Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.');
                break;
              case 'auth/weak-password':
                console.log('Thrown if the password is not strong enough.');
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


    },
    resetPassword: function() {

      forgetPasswordButton.click(function(e) {
        var email = 'pphan23@sme.com';

        // Firebase Authentication
        firebase.auth().sendPasswordResetEmail(email).catch(function(error) {
          e.preventDefault();
          var errorCode = error.code;
          var errorMessage = error.message;

          // Check for errors
          if (error) {
            console.log('Register Error');
            // Go through error code
            switch (errorCode) {
              case 'auth/email-already-in-use':
                console.log('Thrown if there already exists an account with the given email address.');
                break;
              case 'auth/invalid-email':
                console.log('Thrown if the email address is not valid.');
                break;
              case 'auth/operation-not-allowed':
                console.log('Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.');
                break;
              case 'auth/weak-password':
                console.log('Thrown if the password is not strong enough.');
                break;
              default:
                console.log('Error');
            }

          } else {
            // Submit form
            console.log('Login successfull');
          //  loginForm.submit();

          }
        });

      });




    }
  };

})();
