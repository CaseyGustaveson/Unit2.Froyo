const userInputString = prompt("Enter a list of foryo flavors");
const stringArray=userInputString.split(",");


const myObj = {};

for (let i = 0; i < stringArray.length; i++) {
  let currentLetter = stringArray[i].trim();
  if (currentLetter in myObj) {
    myObj[currentLetter] += 1;
  } else {
    myObj[currentLetter] = 1;
  }
}
console.table(myObj);