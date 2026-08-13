import { destinations } from "./data.js";

const destinationContainer = document.querySelector("#destination-container");
const modal = document.querySelector("#destination-modal");
const modalContent = document.querySelector("#modal-content");
const closeModal = document.querySelector("#close-modal");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

function displayDestinations(data) {
    if (!destinationContainer) {
        return;
    }

    destinationContainer.innerHTML = data.map((destination, index) => `
        <article class="destination-card">
            <div class="destination-card-content">
                <h3>${destination.name}</h3>
                <p><strong>Country:</strong> ${destination.country}</p>
                <p><strong>Duration:</strong> ${destination.duration}</p>
                <p><strong>From:</strong> $${destination.price}</p>
                <p>${destination.description}</p>
                <button class="details-button" data-index="${index}">
                    View Details
                </button>
            </div>
        </article>
    `).join("");

    document.querySelectorAll(".details-button").forEach(button => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.index);
            openDestinationModal(data[index]);
        });
    });
}

function openDestinationModal(destination) {
    modalContent.innerHTML = `
        <h2>${destination.name}</h2>
        <p><strong>Country:</strong> ${destination.country}</p>
        <p><strong>Trip Duration:</strong> ${destination.duration}</p>
        <p><strong>Starting Price:</strong> $${destination.price}</p>
        <p>${destination.description}</p>
        <a href="booking.html">Book This Destination</a>
    `;

    modal.showModal();

    localStorage.setItem(
        "selectedDestination",
        JSON.stringify(destination)
    );
}

if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.close();
    });
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });
}

function loadDestinations() {
    try {
        displayDestinations(destinations);
    } catch (error) {
        console.error("Unable to load destinations:", error);

        if (destinationContainer) {
            destinationContainer.innerHTML = `
                <p>Sorry, destinations could not be loaded.</p>
            `;
        }
    }
}

loadDestinations();

export { displayDestinations };
