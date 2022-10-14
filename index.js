function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
    });
}




// CLIENT  ID   1092670337867-qjglh9oog459psi4dkc2u90nepa8vpgp.apps.googleusercontent.com

// CLIENT SECRET   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