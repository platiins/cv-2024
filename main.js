const titles = document.querySelectorAll(".toggle-title");
titles.forEach((title) => {
  title.addEventListener("click", () => {
    const description = title.nextElementSibling;
    const iconMore = title.querySelector(".icon-more");
    if (description.classList.contains("toggle-description")) {
      description.classList.toggle("active");
      iconMore.classList.toggle("active");
    }
  });
});

const modal = document.querySelector(".cert-modal");
const closeModal = document.querySelector(".cert-modal .close");

document.querySelectorAll(".fa-eye").forEach((icon) => {
  icon.addEventListener("click", function (event) {
    event.stopPropagation();
    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
