const menuButton =
    document.querySelector("#menu-button");

const navigation =
    document.querySelector("#navigation");

const bookingForm =
    document.querySelector("#booking-form");

const destinationSelect =
    document.querySelector("#destination");

const bookingDetails =
    document.querySelector("#booking-details");


/* Responsive navigation */

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


/* Preselect destination on booking page */

if (destinationSelect) {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const destinationFromUrl =
        params.get("destination");

    const favorite =
        JSON.parse(
            localStorage.getItem(
                "horizonFavorite"
            )
        );

    const selectedDestination =
        destinationFromUrl ||
        (favorite ? favorite.name : "");

    if (selectedDestination) {
        destinationSelect.value =
            selectedDestination;
    }
}


/* Save booking before submission */

if (bookingForm) {
    bookingForm.addEventListener(
        "submit",
        () => {

            const formData =
                new FormData(bookingForm);

            const booking = {
                name: formData.get("name"),
                email: formData.get("email"),
                destination:
                    formData.get("destination"),
                travelDate:
                    formData.get("travel-date"),
                travelers:
                    formData.get("travelers")
            };

            localStorage.setItem(
                "lastBooking",
                JSON.stringify(booking)
            );
        }
    );
}


/* Display submitted booking */

function displayBookingDetails() {

    if (!bookingDetails) {
        return;
    }

    const params =
        new URLSearchParams(
            window.location.search
        );

    const name = params.get("name");
    const email = params.get("email");
    const phone = params.get("phone");
    const destination =
        params.get("destination");
    const travelDate =
        params.get("travel-date");
    const travelers =
        params.get("travelers");
    const message =
        params.get("message");

    if (!name) {
        bookingDetails.innerHTML = `
            <p>
                No booking information was found.
            </p>

            <a
                href="booking.html"
                class="secondary-button">
                Return to Booking Form
            </a>
        `;

        return;
    }

    bookingDetails.innerHTML = `
        <div class="booking-summary">

            <h2>Booking Details</h2>

            <p>
                <strong>Name:</strong>
                ${name}
            </p>

            <p>
                <strong>Email:</strong>
                ${email}
            </p>

            <p>
                <strong>Phone:</strong>
                ${phone}
            </p>

            <p>
                <strong>Destination:</strong>
                ${destination}
            </p>

            <p>
                <strong>Travel Date:</strong>
                ${travelDate}
            </p>

            <p>
                <strong>Travelers:</strong>
                ${travelers}
            </p>

            <p>
                <strong>Special Requests:</strong>
                ${message || "None"}
            </p>

        </div>
    `;

    localStorage.setItem(
        "lastBooking",
        JSON.stringify({
            name,
            email,
            destination,
            travelDate,
            travelers
        })
    );
}


displayBookingDetails();
