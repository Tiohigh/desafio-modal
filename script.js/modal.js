const openModal = document.getElementById("openModal");

const modalWrapper = document.querySelector(".modal-wrapper");

openModal.onclick = function () {
  modalWrapper.classList.remove("invisible");
};

document.addEventListener("keydown", function () {
  const isEscKey = event.key === "Escape";

  if (isEscKey && !modalWrapper.classList.contains("invisible")) {
    modalWrapper.classList.add("invisible");
  }
});
