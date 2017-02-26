var hackerMode = 0;
var organizerMode = 0;
$(document).ready(function() {
    $("#login").hide();
});


$(document).ready(function() {
    $("#hackBtn").click(function() {
        if (hackerMode == 0) {
            hackerMode = 1;
            organizerMode = 0;
            console.log("Hacker mode!");
            $("#login").show();
        } else {
            hackerMode = 0;
            $("#login").hide();
        }
    });

    $("#orgBtn").click(function() {
        if (organizerMode == 0) {
            organizerMode = 1;
            hackerMode = 0;
            console.log("Organizer mode!");
            $("#login").hide();
        } else {
            organizerMode = 0;
        }
    });
});
