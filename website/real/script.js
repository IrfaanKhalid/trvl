prompt("Username: ");
var id = prompt("Password: ");

/*
var dbref = new Firebase("https://hack-travel-2a8a2.firebaseio.com/");
console.log(dbref.value());
*/

$.get("https://hack-travel-2a8a2.firebaseio.com/attendees.json", function(data) {
    //0 = Car, 1 = Bus, 2 = Plane
    if(data[id]["mode"] == 1)
    {
        busStuff();
    }
});

function busStuff(){
  
}


function getLocation(school) {
    var coordinates = [100, 100];
    return coordinates;
}
