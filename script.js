// Live Bus Tracking and ETA Notifications

// Search for buses by route number or destination
document.getElementById('search-btn').addEventListener('click', function() {
    const searchInput = document.getElementById('search').value;
    alert(`Searching for buses with route number or destination: ${searchInput}`);
});

// Save notification settings for arrival and delay alerts
document.getElementById('notification-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const arrivalAlerts = document.getElementById('arrival-alerts').checked;
    const delayAlerts = document.getElementById('delay-alerts').checked;

    alert(`Settings saved:\nArrival Alerts: ${arrivalAlerts}\nDelay Alerts: ${delayAlerts}`);
});

// Fetch and display ETA for selected bus and route
function fetchETA() {
    const etaInfo = "Route 42: 5 minutes, Route 10: 12 minutes, Route 27: 3 minutes";
    document.getElementById('eta-info').innerText = etaInfo;
}

// Display ETA when a route and bus are selected
document.getElementById('eta-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userLocation = document.getElementById("user-location").value;
    const selectedRoute = document.getElementById("route").value;
    const selectedBus = document.getElementById("bus-number").value;

    // Placeholder for fetching ETA data (this can be replaced with actual API calls)
    const etaDisplay = document.getElementById("eta-display");
    etaDisplay.innerHTML = `
        <h3>ETA Details:</h3>
        <p><strong>Location:</strong> ${userLocation}</p>
        <p><strong>Route:</strong> ${selectedRoute.replace("-", " to ")}</p>
        <p><strong>Bus Number:</strong> ${selectedBus}</p>
        <p><strong>Estimated Arrival:</strong> 15 minutes</p>
    `;
    etaDisplay.style.display = "block";
});

// Initial call to simulate fetching ETA data on page load
fetchETA();

// script.js

// Update bus numbers based on selected route
function updateBusNumbers() {
    const route = document.getElementById("route").value;
    const busNumberDropdown = document.getElementById("bus-number");
    busNumberDropdown.innerHTML = ""; // Clear previous options

    const buses = {
        route1: ["Bus 101", "Bus 102"],
        "route1-reverse": ["Bus 103", "Bus 104"],
        route2: ["Bus 201", "Bus 202"],
        "route2-reverse": ["Bus 203", "Bus 204"]
    };

    if (buses[route]) {
        buses[route].forEach(bus => {
            const option = document.createElement("option");
            option.value = bus;
            option.textContent = bus;
            busNumberDropdown.appendChild(option);
        });
    }
}

// Display ETA based on selected location
function displayETA(event) {
    event.preventDefault();

    const location = document.getElementById("user-location").value;
    const route = document.getElementById("route").value;
    const busNumber = document.getElementById("bus-number").value;

    if (location && route && busNumber) {
        const etaDisplay = document.getElementById("eta-display");
        const eta = "Approx. 10-15 minutes"; // Replace with actual logic if available
        etaDisplay.innerHTML = `
            <h3>ETA for ${location}</h3>
            <p>Route: ${route}, Bus: ${busNumber}</p>
            <p>Estimated Time of Arrival: ${eta}</p>
        `;
    } else {
        alert("Please select all fields to get ETA.");
    }
}
