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
























export const destinations = [
    {
        name: "Dubai",
        country: "United Arab Emirates",
        price: 850,
        duration: "5 days",
        description: "Experience modern architecture, luxury shopping, desert adventures, and beautiful beaches."
    },
    {
        name: "London",
        country: "United Kingdom",
        price: 950,
        duration: "6 days",
        description: "Explore historic landmarks, museums, royal palaces, and the vibrant streets of London."
    },
    {
        name: "Paris",
        country: "France",
        price: 900,
        duration: "5 days",
        description: "Visit the Eiffel Tower, explore beautiful streets, enjoy French culture, and discover famous landmarks."
    },
    {
        name: "New York",
        country: "United States",
        price: 1100,
        duration: "6 days",
        description: "Experience Times Square, Central Park, museums, shopping, and the energy of New York City."
    },
    {
        name: "Cape Town",
        country: "South Africa",
        price: 700,
        duration: "5 days",
        description: "Enjoy beautiful beaches, Table Mountain, wildlife, and spectacular coastal scenery."
    },
    {
        name: "Rome",
        country: "Italy",
        price: 980,
        duration: "6 days",
        description: "Discover ancient history, Roman architecture, delicious Italian food, and famous landmarks."
    },
    {
        name: "Barcelona",
        country: "Spain",
        price: 920,
        duration: "5 days",
        description: "Enjoy Spanish culture, beautiful architecture, beaches, food, and exciting nightlife."
    },
    {
        name: "Istanbul",
        country: "Turkey",
        price: 780,
        duration: "5 days",
        description: "Experience a unique combination of European and Asian culture, historic sites, and local cuisine."
    },
    {
        name: "Cairo",
        country: "Egypt",
        price: 650,
        duration: "5 days",
        description: "Explore the pyramids, ancient history, museums, and the fascinating culture of Egypt."
    },
    {
        name: "Accra",
        country: "Ghana",
        price: 350,
        duration: "4 days",
        description: "Enjoy beaches, local food, cultural attractions, and the lively atmosphere of Ghana's capital."
    },
    {
        name: "Nairobi",
        country: "Kenya",
        price: 550,
        duration: "5 days",
        description: "Discover wildlife, national parks, cultural attractions, and the beautiful landscapes of Kenya."
    },
    {
        name: "Tokyo",
        country: "Japan",
        price: 1250,
        duration: "7 days",
        description: "Experience Japanese culture, technology, amazing food, temples, and the excitement of Tokyo."
    },
    {
        name: "Toronto",
        country: "Canada",
        price: 1050,
        duration: "6 days",
        description: "Explore Canada's largest city, famous attractions, diverse neighborhoods, and beautiful parks."
    },
    {
        name: "Amsterdam",
        country: "Netherlands",
        price: 990,
        duration: "5 days",
        description: "Discover canals, museums, cycling culture, historic buildings, and charming neighborhoods."
    },
    {
        name: "Doha",
        country: "Qatar",
        price: 800,
        duration: "5 days",
        description: "Experience modern architecture, cultural attractions, luxury shopping, and Arabian hospitality."
    }
];











