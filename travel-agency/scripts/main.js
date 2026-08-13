import { showDestinationModal } from "./modules/data.js";

const destinationContainer =
    document.querySelector("#destination-container");

const featuredContainer =
    document.querySelector("#featured-destinations");

const searchInput =
    document.querySelector("#destination-search");

const menuButton =
    document.querySelector("#menu-button");

const navigation =
    document.querySelector("#navigation");

let destinations = [];


/* =========================
   MOBILE NAVIGATION
========================= */

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/* =========================
   GET DESTINATIONS
========================= */

async function getDestinations() {

    try {

        const response =
            await fetch("data/destinations.json");

        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }

        const data =
            await response.json();

        destinations =
            data.destinations;

        displayDestinations(destinations);

        displayFeaturedDestinations(
            destinations.slice(0, 6)
        );

    } catch (error) {

        console.error(
            "Unable to load destinations:",
            error
        );

        if (destinationContainer) {

            destinationContainer.innerHTML = `
                <p class="error-message">
                    Sorry, we could not load the destinations.
                    Please try again later.
                </p>
            `;

        }

        if (featuredContainer) {

            featuredContainer.innerHTML = `
                <p class="error-message">
                    Sorry, we could not load the destinations.
                </p>
            `;

        }

    }

}


/* =========================
   DISPLAY ALL DESTINATIONS
========================= */

function displayDestinations(items) {

    if (!destinationContainer) {
        return;
    }

    destinationContainer.innerHTML = "";

    items.forEach((destination) => {

        const card =
            document.createElement("article");

        card.classList.add(
            "destination-card"
        );

        card.innerHTML = `

            <img
                src="${destination.image}"
                alt="${destination.name}, ${destination.country}"
                loading="lazy"
                width="800"
                height="500"
            >

            <div class="destination-card-content">

                <p class="destination-country">
                    ${destination.country}
                </p>

                <h2>
                    ${destination.name}
                </h2>

                <p>
                    ${destination.description}
                </p>

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


    document
        .querySelectorAll(".details-button")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    const destination =
                        destinations.find(
                            (item) =>
                                item.id === id
                        );

                    showDestinationModal(
                        destination
                    );

                }
            );

        });

}


/* =========================
   FEATURED DESTINATIONS
========================= */

function displayFeaturedDestinations(items) {

    if (!featuredContainer) {
        return;
    }

    featuredContainer.innerHTML =
        items.map((destination) => `

            <article class="preview-card">

                <img
                    src="${destination.image}"
                    alt="${destination.name}, ${destination.country}"
                    loading="lazy"
                    width="800"
                    height="500"
                >

                <div class="preview-card-content">

                    <p>
                        ${destination.country}
                    </p>

                    <h3>
                        ${destination.name}
                    </h3>

                    <p>
                        From $${destination.price}
                    </p>

                </div>

            </article>

        `).join("");

}


/* =========================
   SEARCH
========================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            const searchTerm =
                searchInput.value
                    .toLowerCase()
                    .trim();

            const filteredDestinations =
                destinations.filter(
                    (destination) =>

                        destination.name
                            .toLowerCase()
                            .includes(searchTerm)

                        ||

                        destination.country
                            .toLowerCase()
                            .includes(searchTerm)
                );

            displayDestinations(
                filteredDestinations
            );

        }
    );

}


/* =========================
   FOOTER DATE
========================= */

const currentYear =
    document.querySelector("#current-year");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}

const lastModified =
    document.querySelector("#last-modified");

if (lastModified) {

    lastModified.textContent =
        `Last Modified: ${document.lastModified}`;

}


/* =========================
   START
========================= */

getDestinations();
