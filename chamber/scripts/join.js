const timestamp = document.querySelector("#timestamp");

timestamp.value = new Date().toISOString();

const modalButtons = document.querySelectorAll(".modal-link");
const closeButtons = document.querySelectorAll(".close-modal");

modalButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const modalId = button.dataset.modal;
        const modal = document.getElementById(modalId);

        modal.showModal();
    });
});

closeButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const modal = button.closest("dialog");

        modal.close();
    });
});

document.querySelectorAll("dialog").forEach((modal) => {

    modal.addEventListener("click", (event) => {

        const rect = modal.getBoundingClientRect();

        const clickedOutside =
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom;

        if (clickedOutside) {
            modal.close();
        }

    });

});
