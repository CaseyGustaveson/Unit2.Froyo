const userInput = prompt("Enter a list of foryo flavors");
const stringArray=userInput.split(",");


const myObj = {};

for (let i = 0; i < stringArray.length; i++) {
  let currentFlavor = stringArray[i];
  if (currentFlavor in myObj) {
    myObj[currentFlavor] += 1;
  } else {
    myObj[currentFlavor] = 1;
  }
};

console.table(myObj);