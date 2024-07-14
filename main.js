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
