const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

const year = document.querySelector("#current-year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#last-modified");

if (lastModified) {
    lastModified.textContent = `Last modified: ${document.lastModified}`;
}
