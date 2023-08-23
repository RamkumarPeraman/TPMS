const scrollButton = document.getElementById("scrollButton");
const scrollableContent = document.getElementById("scrollableContent");

scrollButton.addEventListener("click", () => {
  scrollableContent.classList.toggle("expanded");
});
