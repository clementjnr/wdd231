function displayBookingDetails() {
    const details = document.querySelector("#booking-details");

    if (!details) {
        return;
    }

    const params = new URLSearchParams(window.location.search);

    const name = params.get("name");
    const email = params.get("email");
    const phone = params.get("phone");
    const destination = params.get("destination");
    const travelDate = params.get("travel-date");
    const travelers = params.get("travelers");
    const message = params.get("message");

    if (!name) {
        details.innerHTML = `
            <p>No booking information was found.</p>
            <a href="booking.html">Return to the booking form</a>
        `;
        return;
    }

    details.innerHTML = `
        <div class="booking-summary">
            <h2>Booking Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Destination:</strong> ${destination}</p>
            <p><strong>Travel Date:</strong> ${travelDate}</p>
            <p><strong>Travelers:</strong> ${travelers}</p>
            <p><strong>Special Requests:</strong> ${message || "None"}</p>
        </div>
    `;

    localStorage.setItem("lastBooking", JSON.stringify({
        name,
        email,
        destination,
        travelDate,
        travelers
    }));
}

function setupNavigation() {
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
        });
    }
}

setupNavigation();
displayBookingDetails();

export { displayBookingDetails };
