import { places } from "../data/places.mjs";

const grid = document.querySelector("#discover-grid");

// Build the cards
places.forEach((place, index) => {
    const card = document.createElement("section");
    card.classList.add("place-card", `card${index + 1}`);

    card.innerHTML = `
        <h2>${place.title}</h2>

        <figure>
            <img src="${place.image}"
                 alt="${place.title}"
                 loading="lazy"
                 width="300"
                 height="200">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button type="button">Learn More</button>
    `;

    grid.appendChild(card);
});



const visitMessage = document.querySelector("#visit-message");

const lastVisit = Number(localStorage.getItem("lastVisit"));
const today = Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const days = Math.floor(
        (today - lastVisit) / (1000 * 60 * 60 * 24)
    );

    if (days < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    } else if (days === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    } else {

        visitMessage.textContent =
            `You last visited ${days} days ago.`;

    }

}

localStorage.setItem("lastVisit", today);
