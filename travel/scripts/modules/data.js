const modal = document.querySelector("#destination-modal");
const modalContent = document.querySelector("#modal-content");
const closeModalButton = document.querySelector("#close-modal");

export function showDestinationModal(destination) {
    if (!modal || !modalContent) {
        return;
    }

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

        <h2>${destination.name}</h2>

        <p>${destination.description}</p>

        <p>
            <strong>Duration:</strong>
            ${destination.duration}
        </p>

        <p>
            <strong>Starting price:</strong>
            $${destination.price}
        </p>

        <button
            type="button"
            class="favorite-button"
            data-favorite="${destination.id}">
            ❤️ Save as Favorite
        </button>
    `;

    modal.showModal();

    const favoriteButton =
        modalContent.querySelector(".favorite-button");

    favoriteButton.addEventListener("click", () => {
        saveFavorite(destination);
    });
}

function saveFavorite(destination) {
    localStorage.setItem(
        "horizonFavorite",
        JSON.stringify(destination)
    );

    alert(`${destination.name} has been saved as your favorite!`);
}

if (closeModalButton) {
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
