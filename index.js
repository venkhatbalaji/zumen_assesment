window.flightList = [
    {
        FlightName: "Sample Name1",
        FlightOrgin: "Sample Orgin",
        FlightDestination: "Sample Destination",
        FlightPrice: 10,
        FlightRating: 2
    },
    {
        FlightName: "Sample Name2",
        FlightOrgin: "Sample Orgin",
        FlightDestination: "Sample Destination",
        FlightPrice: 100,
        FlightRating: 5
    }
]

function addItem() {
    if (validateInputs(getInput())) {
        document.getElementById('error').style.display = "block";

    } else {
        document.getElementById('error').style.display = "none";
        window.flightList.push(getInput());
        console.log(window.flightList);
        document.getElementById('flightList').innerHTML += showListOfFlights(getInput());
        clearValues();
    }
}

let validateInputs = (flightList) => {
    if (flightList.FlightName == '' || flightList.FlightOrgin == '' || flightList.FlightDestination == ''
        || flightList.FlightPrice == '' || flightList.FlightRating == '') {
        return true;
    } else if (isNaN(flightList.FlightPrice) || isNaN(flightList.FlightRating)) {
        console.log(typeof (flightList.FlightPrice));
        alert('Please Enter a number');
        return true;
    } else{
        return false;
    }
}

let showListOfFlights = (flightList) => {
    return (
        `<div class="card">
            <h4>${flightList.FlightName}</h4>
            <ul>
                <li>FlightName : ${flightList.FlightName}</li>
                <li>FlightOgin : ${flightList.FlightOrgin}</li>
                <li>FlightDestination :${flightList.FlightDestination}</li>
                <li>FlightPrice : ${flightList.FlightPrice}</li>
                <li>FlightRating : ${flightList.FlightRating}</li>
            </ul>
        </div>`
    )
}

let getInput = () => {
    let flightList = {
        FlightName: document.getElementById('Name').value,
        FlightOgin: document.getElementById('Origin').value,
        FlightDestination: document.getElementById('Destination').value,
        FlightPrice: parseInt(document.getElementById('Price').value),
        FlightRating: parseInt(document.getElementById('Rating').value)
    }
    return flightList;
}

let clearValues = () => {
    document.getElementById('Name').value = '';
    document.getElementById('Origin').value = '';
    document.getElementById('Destination').value = '';
    document.getElementById('Price').value = '';
    document.getElementById('Rating').value = '';

}

let sortByPrice = () => {
    let btnVAl = document.getElementById('sortBtnPrice').value.toLowerCase();
    console.log(btnVAl);
    window.flightList.sort((a, b) => {
        const price1 = a.FlightPrice;
        const price2 = b.FlightPrice;
        let compare = 0;
        if (price1 > price2) {
            compare = 1;
        } else if (price1 < price2) {
            compare = -1;
        }
        if (btnVAl.indexOf('(asc)') !== -1) {
            document.getElementById('sortBtnPrice').value = 'Sort by price (Desc)';
            return compare;
        } else {
            document.getElementById('sortBtnPrice').value = 'Sort by price (Asc)';
            return compare * -1;
        }
    });
    var newElement = '';
    window.flightList.forEach(element => {
        newElement += showListOfFlights(element);
    });
    console.log(newElement);
    document.getElementById('flightList').innerHTML = newElement;
    console.log(window.flightList);
}

let sortByRating = () => {

    let btnVAl = document.getElementById('sortBtnRating').value.toLowerCase();
    console.log(btnVAl);
    window.flightList.sort((a, b) => {
        const price1 = a.FlightPrice;
        const price2 = b.FlightPrice;
        let compare = 0;
        if (price1 > price2) {
            compare = 1;
        } else if (price1 < price2) {
            compare = -1;
        }
        if (btnVAl.indexOf('(asc)') !== -1) {
            document.getElementById('sortBtnRating').value = 'Sort by price (Desc)';
            return compare;
        } else {
            document.getElementById('sortBtnRating').value = 'Sort by price (Asc)';
            return compare * -1;
        }
    });
    var newElement = '';
    window.flightList.forEach(element => {
        newElement += showListOfFlights(element);
    });
    console.log(newElement);
    document.getElementById('flightList').innerHTML = newElement;
    console.log(window.flightList);
}