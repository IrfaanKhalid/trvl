var hackerMode = 0;
var organizerMode = 0;

function enableHacker() {
    hackerMode = 1;
    organizerMode = 0;
    console.log("Hacker mode!");
}

function enableOrganizer() {
    organizerMode = 1;
    hackerMode = 0;
    console.log("Organizer mode!");
}
