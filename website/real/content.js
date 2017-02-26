var sidebar = document.getElementById("sidebar");

function displayWelcome(name) {
    var hi = document.createElement("h1") // Create a <h1> element
    var hiText = document.createTextNode("Welcome " + name + "!"); // Create a text node
    hi.appendChild(hiText); // Append the text to <h1>
    sidebar.appendChild(hi);
}


function takingBus(school) {
    var info = document.createElement("p") // Create a <h1> element
    var infoText = document.createTextNode("We see that you're coming from " + school + ". We will be sending a bus to " + school + " so just keep an eye on your email."); // Create a text node
    info.appendChild(infoText); // Append the text to <h1>
    sidebar.appendChild(info);
}


function takingCar(vin, currentLoc) {
    var cost = shit(); // NEED TO CALL THE BACKEND FOR THIS
    cost = Math.round(cost)
    var info = document.createElement("p") // Create a <h1> element
    var infoText = document.createTextNode("We see that you're coming from " + school + ". We will not be sending a bus to " + school +
        " but we are offering gas reimbursements. Based on your university, we can offer you around $" + cost); // Create a text node
    info.appendChild(infoText); // Append the text to <h1>
    sidebar.appendChild(info);
}