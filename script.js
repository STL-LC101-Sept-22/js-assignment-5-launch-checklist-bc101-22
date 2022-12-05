// Write your JavaScript code here!

window.addEventListener("load", function () {
    let document = window.document;

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })

    let list = document.getElementById("faultyItems");
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;

        if (validateInput(pilotName) === "Empty"
            || validateInput(copilotName) === "Empty" ||
            validateInput(fuelLevel) === "Empty" ||
            validateInput(cargoMass) === "Empty"
        ) {
            window.alert("All fields are required!")
        }
        else if (validateInput(pilotName) !== "Not a Number"
            || validateInput(copilotName) !== "Not a Number"
            || validateInput(fuelLevel) !== "Is a Number"
            || validateInput(cargoMass) !== "Is a Number") {
            window.alert("Make sure to enter valid information for each field!")
        }

        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
    });

    // function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


});