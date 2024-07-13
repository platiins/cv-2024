const titles = document.querySelectorAll(".toggle-title");
titles.forEach((title) => {
  title.addEventListener("click", () => {
    const description = title.nextElementSibling;
    if (description.classList.contains("toggle-description")) {
      description.classList.toggle("active");
    }
  });
});
