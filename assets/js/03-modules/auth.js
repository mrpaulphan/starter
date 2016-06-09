var auth = (function() {
  var loginSubmitButton = $('#loginSubmitButton'),
    registerSubmitButton = $('#registerSubmit'),
    forgetPasswordButton = $('#forgetPassword'),
    loginEmailInput = $('#loginEmail'),
    loginPasswordInput = $('#loginPassword'),
    registerEmailInput = $('#registerEmail'),
    registerPasswordInput = $('#registerPassword'),
    loginForm = $('#loginForm'),
    registerForm = $('#registerForm'),
    registerUsername = $('#registerUsername'),
    currentURL = $(location).attr('href');
  return {
    init: function() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log('User is logged in');
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var refreshToken = user.refreshToken;
          var providerData = user.providerData;

          if (currentURL == constant.main) {
            window.location.replace(constant.dashboard);

          }
          if (currentURL == constant.dashboard) {
            db.account(user);
          }

        } else {
          console.log('No User');

          if (currentURL == constant.dashboard) {
            alert('you need to be logged in')
            window.location.replace(constant.main);
          }



        }

      });
    },
    /*
    The login function will read the data from the input fields
    and check it with the firebase DB.
    */
    login: function() {
      loginSubmitButton.click(function(e) {
        e.preventDefault();
        var email = loginEmailInput.val();
        var password = loginPasswordInput.val();


        // Firebase Authentication - Login
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
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
          }


        })



      });

    },
    /*
    The register function will create a new user and check for errors.
    */
    register: function() {
      registerSubmitButton.click(function(e) {
        e.preventDefault();

        var email = registerEmailInput.val(),
          password = registerPasswordInput.val();


        // Firebase Authentication - Register
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
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
            console.log('Register successfull');



            //  registerForm.submit();

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
