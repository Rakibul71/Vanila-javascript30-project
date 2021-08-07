const panels = document.querySelectorAll(".panel");
// console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    //   onclick a active class add korar away
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
