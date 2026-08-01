const params = new URLSearchParams(window.location.search);

const firstName = params.get("firstName") || "";
const lastName = params.get("lastName") || "";
const email = params.get("email") || "";
const phone = params.get("phone") || "";
const organization = params.get("organization") || "";
const timestamp = params.get("timestamp") || "";

const details = document.querySelector("#application-details");

details.innerHTML = `
    <div class="application-result">
        <h3>Application Information</h3>

        <p>
            <strong>First Name:</strong>
            ${firstName}
        </p>

        <p>
            <strong>Last Name:</strong>
            ${lastName}
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
            <strong>Business / Organization:</strong>
            ${organization}
        </p>

        <p>
            <strong>Application Timestamp:</strong>
            ${timestamp}
        </p>
    </div>
`;
