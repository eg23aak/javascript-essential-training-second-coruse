/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridcontainer = document.querySelector(".container");

gridcontainer.addEventListener("mouseenter", () => {
  gridcontainer.style.border = "6px solid red";
});
gridcontainer.addEventListener("mouseleave", () => {
  gridcontainer.style.border = "none";
});

const arrBoxes = document.querySelectorAll(".cell");

arrBoxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "aliceblue";
  });
  box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "";
  });
  const classes = box.getAttribute("class");
  console.log(classes);
  box.addEventListener("click", () => {
    alert(`Hallo from ${classes}`);
  });
});
