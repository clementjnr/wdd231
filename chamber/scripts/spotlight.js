const spotlightContainer = document.getElementById("spotlight-container");

async function loadSpotlights() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Unable to load member data.");
        }

        const members = await response.json();

        // Only Silver (2) and Gold (3) members
        const qualifiedMembers = members.filter(member =>
            member.membership === 2 || member.membership === 3
        );

        // Shuffle array
        qualifiedMembers.sort(() => Math.random() - 0.5);

        // Select first three members
        const selectedMembers = qualifiedMembers.slice(0, 3);

        spotlightContainer.innerHTML = "";

        selectedMembers.forEach(member => {

            const card = document.createElement("section");
            card.classList.add("spotlight-card");

            const level =
                member.membership === 3 ? "Gold Member" : "Silver Member";

            card.innerHTML = `
                <img src="images/${member.image}"
                     alt="${member.name} logo"
                     loading="lazy">

                <h3>${member.name}</h3>

                <p>${level}</p>

                <p>${member.address}</p>

                <p>${member.phone}</p>

                <p>
                    <a href="${member.website}" target="_blank">
                        Visit Website
                    </a>
                </p>
            `;

            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error(error);
    }
}

loadSpotlights();




