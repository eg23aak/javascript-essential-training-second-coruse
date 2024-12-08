/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

let collection = ["Piggy", item, 5, true];

console.log(collection);
console.log(collection.join(" | "));

collection.push("Obeng", 3);
console.log(collection.join(" | "));

collection.unshift("I am the first!");
console.log(collection.join(" | "));

collection.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

const backpack1 = ["water bottle", "laptop"];
const backpack2 = ["headphones", "snacks", "book"];

const itemsToPack = new Set();
itemsToPack.add("water bottle");
itemsToPack.add("laptop");
itemsToPack.add("headphones");
itemsToPack.add("snacks");
itemsToPack.add("book");
itemsToPack.add("sunscreen");

itemsToPack.forEach((item) => {
  if (backpack1.includes(item)) {
    console.log(`${item} is packed in backpack 1`);
  } else if (backpack2.includes(item)) {
    console.log(`${item} is packed in backpack 2`);
  } else {
    console.log(`${item} is not packed`);
  }
});

// const deskArray = [
//   "pen",
//   "camera",
//   "phone",
//   "notebook",
//   "headphones",
//   "laptop",
//   "light bulb",
//   "USB drive",
//   "elephant"
// ];

//   let newDeskArr = [...deskArray];

//   // Your code goes here
//   newDeskArr.pop(); //removes the last item, elephant

//   newDeskArr.sort(); //alphabetical order?
//   let item = newDeskArr.pop();
//   newDeskArr.unshift(item);
//   item = newDeskArr.indexOf("USB drive");
//   newDeskArr.push(newDeskArr.splice(item,1))
//   item = newDeskArr.indexOf("laptop");
//   newDeskArr.splice(item,1)
//   // Your code ends here

// console.log(newDeskArr)
