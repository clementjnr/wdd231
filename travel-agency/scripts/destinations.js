import { showDestinationModal } from "./modules/data.js";

const destinationContainer = document.querySelector(
    "#destination-container"
);

const searchInput = document.querySelector("#destination-search");

let destinations = [];

async function getDestinations() {
    try {
        const response = await fetch("data/destinations.json");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        destinations = data.destinations;

        displayDestinations(destinations);
    } catch (error) {
        console.error("Unable to load destinations:", error);

        destinationContainer.innerHTML = `
            <p class="error-message">
                Sorry, we could not load the destinations.
                Please try again later.
            </p>
        `;
    }
}

function displayDestinations(items) {
    destinationContainer.innerHTML = "";

    items.forEach((destination) => {
        const card = document.createElement("article");

        card.classList.add("destination-card");

        card.innerHTML = `
            <img
                src="${destination.image}"
                alt="Travel destination: ${destination.name}, ${destination.country}"
                loading="lazy"
                width="800"
                height="500"
            >

            <div class="destination-card-content">
                <p class="destination-country">
                    ${destination.country}
                </p>

                <h2>${destination.name}</h2>

                <p>${destination.description}</p>

                <div class="destination-details">
                    <span>
                        <strong>Duration:</strong>
                        ${destination.duration}
                    </span>

                    <span>
                        <strong>From:</strong>
                        $${destination.price}
                    </span>
                </div>

                <button
                    class="details-button"
                    type="button"
                    data-id="${destination.id}">
                    View Details
                </button>
            </div>
        `;

        destinationContainer.appendChild(card);
    });

    document.querySelectorAll(".details-button").forEach((button) => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id);

            const destination = destinations.find(
                (item) => item.id === id
            );

            showDestinationModal(destination);
        });
    });
}

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        const filteredDestinations = destinations.filter((destination) =>
            destination.name.toLowerCase().includes(searchTerm) ||
            destination.country.toLowerCase().includes(searchTerm)
        );

        displayDestinations(filteredDestinations);
    });
}

getDestinations();
