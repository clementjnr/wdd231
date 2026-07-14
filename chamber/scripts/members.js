const url = "data/members.json";
const membersContainer = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Could not load member data.");
        }

        const data = await response.json();

        displayMembers(data);

    } catch (error) {
        console.error(error);
    }
}

function displayMembers(members) {

    membersContainer.innerHTML = "";

    members.forEach((member) => {

        const card = document.createElement("section");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">

            <h3>${member.name}</h3>

            <p><strong>Address:</strong><br>${member.address}</p>

            <p><strong>Phone:</strong><br>${member.phone}</p>

            <p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p><strong>Membership:</strong> ${membershipLevel(member.membership)}</p>

            <p>${member.description}</p>
        `;

        membersContainer.appendChild(card);

    });

}

function membershipLevel(level) {

    switch (level) {

        case 3:
            return "Gold Member";

        case 2:
            return "Silver Member";

        default:
            return "Member";
    }

}


document.querySelector("#grid").addEventListener("click", () => {

    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");

});


document.querySelector("#list").addEventListener("click", () => {

    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");

});


getMembers();
