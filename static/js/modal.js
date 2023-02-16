var modal = document.querySelector(".modal");
var triggerDesktop = document.querySelector(".trigger-desktop");
var triggerMobile = document.querySelector(".trigger-mobile");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
    if (modal.classList.contains("show-modal")) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
}

function windowOnClick(event) {
    if (event.currentTarget === closeButton) {
        toggleModal();
    }
}

triggerDesktop.addEventListener("click", toggleModal);
triggerMobile.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
