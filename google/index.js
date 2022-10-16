//  function onSignIn(googleUser) {
//   console.log("pppppppppppppppp");
//   var profile = googleUser.getBasicProfile();
//   console.log(profile, "profile");
//   $("#name").text(profile.getName());
//   $("#email").text(profile.getEmail());
//   $("#image").attr("src", profile.getImageUrl());
//   $(".data").css("display", "block");
//   $(".g-signin2").css("display", "none");
// }

// function signOut() {
//   console.log("out");
//   var auth2 = gapi.auth2.getAuthInstance();
//   auth2.signOut().then(function () {
//     alert("You have been signed out successfully");
//     $(".data").css("display", "none");
//     $(".g-signin2").css("display", "block");
//   });
// }
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
// CLIENT  ID   1092670337867-qjglh9oog459psi4dkc2u90nepa8vpgp.apps.googleusercontent.com

// CLIENT SECRET   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
