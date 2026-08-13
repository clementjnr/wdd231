const modal = document.querySelector("#destination-modal");
const modalContent = document.querySelector("#modal-content");
const closeModalButton = document.querySelector("#close-modal");

export function showDestinationModal(destination) {
    if (!modal || !modalContent || !destination) {
        return;
    }

    const favorite =
        JSON.parse(localStorage.getItem("horizonFavorite")) || null;

    const isFavorite = favorite && favorite.id === destination.id;

    modalContent.innerHTML = `
        <img
            src="${destination.image}"
            alt="${destination.name}, ${destination.country}"
            width="800"
            height="500"
        >

        <p class="destination-country">
            ${destination.country}
        </p>

        <h2 id="modal-title">${destination.name}</h2>

        <p>${destination.description}</p>

        <p>
            <strong>Duration:</strong>
            ${destination.duration}
        </p>

        <p>
            <strong>Starting price:</strong>
            $${destination.price}
        </p>

        <div class="modal-actions">
            <button
                type="button"
                class="favorite-button"
                id="favorite-button">
                ${isFavorite ? "❤️ Saved as Favorite" : "♡ Save as Favorite"}
            </button>

            <a
                class="cta-button"
                href="booking.html?destination=${encodeURIComponent(destination.name)}">
                Book This Destination
            </a>
        </div>
    `;

    modal.showModal();

    const favoriteButton =
        document.querySelector("#favorite-button");

    if (favoriteButton) {
        favoriteButton.addEventListener("click", () => {
            localStorage.setItem(
                "horizonFavorite",
                JSON.stringify(destination)
            );

            favoriteButton.textContent = "❤️ Saved as Favorite";
        });
    }
}

if (closeModalButton && modal) {
    closeModalButton.addEventListener("click", () => {
        modal.close();
    });
}

if (modal) {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
}
