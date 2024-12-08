// Setup data
const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

const navList = document.createElement("ul"); //creates a ul element called navList
navList.innerHTML = navContent; //adds the contents of navContent, deletes all previous contained content

const navBar = document.createElement("nav");
navBar.append(navList); //inserts navList after the last child of navBar
navBar.classList.add("main-navigation");

const parentCont = document.getElementsByClassName("siteheader")[0];
parentCont.append(navBar);
