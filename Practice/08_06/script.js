/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
function addH1() {
  const pageHeader = document.createElement("h1");

  let headerContent = "Welcome to my website!";
  pageHeader.innerHTML = headerContent;
  const header = document.createElement("header");
  header.append(pageHeader);
  const parentCont = document.querySelector("body");
  parentCont.append(header);
}
addH1();

const h1Size = function () {
  let pageHeader = document.querySelector("h1");
  pageHeader.style.cssText = "font-size:70px;";
};
h1Size();

const addP = () => {
  const parContent = "This is my paragraph!";

  const mainP = document.createElement("p");
  mainP.innerHTML = parContent;

  const parentCont = document.querySelector("main");
  parentCont.append(mainP);
};
addP();
