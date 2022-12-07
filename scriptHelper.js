// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTargetInfo = document.getElementById("missionTarget");
    missionTargetInfo.innerHTML =
        `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons} </li>
        </ol>
        <img src="${imageUrl}">`
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    return isNaN(Number(testInput)) ? "Not a Number" : "Is a Number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let ready = true;

    list.style.visibility = "visible";
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000) {
        document.getElementById("launchStatus").innerText = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("fuelStatus").innerText = "Fuel level too low for launch";
        ready = false;
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    }

    if (cargoLevel > 10000) {
        document.getElementById("launchStatus").innerText = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("cargoStatus").innerText = "Cargo mass too heavy for launch";
        ready = false;
    } else {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    }

    if (ready) {
        document.getElementById("launchStatus").innerText = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    }



}

async function myFetch() {
    let planetsReturned;

    await fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(function (response) {
            planetsReturned = response.json()
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
