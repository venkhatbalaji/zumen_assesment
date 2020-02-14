var FlightList = window.flightList;

function addItem(){
    let flightName = document.getElementById('Name').value;
    let flightOrgin = document.getElementById('Origin').value;
    let flightDestination = document.getElementById('Destination').value;
    let flightPrice = document.getElementById('Price').value;
    let flightRating = document.getElementById('Rating').value;
    if(flightName || flightOrgin || flightDestination || flightPrice || flightRating){
        document.getElementById('error').style.display = "none";

    }else{
        console.log(FlightList);
        document.getElementById('error').style.display = "block";
    }

}