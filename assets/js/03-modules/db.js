var db = (function() {

  var profileInfo = $('.profile');
  return {
    query: function() {

      //
      // var myUserId = firebase.auth().currentUser.uid;
      // var topUserPostsRef = firebase.database().ref('user-posts/' + myUserId).orderByChild('starCount');
      // // [END my_top_posts_query]
      // // [START recent_posts_query]
      // var recentPostsRef = firebase.database().ref('posts').limitToLast(100);
      // // [END recent_posts_query]
      // var userPostsRef = firebase.database().ref('user-posts/' + myUserId);
      //
      // var fetchPosts = function(postsRef, sectionElement) {
      //   postsRef.on('child_added', function(data) {
      //     var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
      //     containerElement.insertBefore(
      //       createPostElement(data.key, data.val().title, data.val().body, data.val().author),
      //       containerElement.firstChild);
      //   });
      // };
      //
      // fetchPosts(topUserPostsRef, topUserPostsSection);
      // fetchPosts(recentPostsRef, recentPostsSection);
      // fetchPosts(userPostsRef, userPostsSection);
      //


    },
    account: function(user) {
      console.log('Did this work ' + user.email);
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var refreshToken = user.refreshToken;
      var providerData = user.providerData;
      var data = "<p>Name: " + displayName + "</p><p>Email: " + email + "</p><p>Email Verified: " + emailVerified + "</p><p>Photo URL: " + photoURL + "</p> <p>UID: " + uid + "</p><p>Password: " + providerData + "</p>";

      profileInfo.append(data);

    }






  };
})();
