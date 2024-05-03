[...new Set("referee")].join("");

const myArray = [1, 1, 2, 2, 3, 4];
const mySet = new Set(myArray);

console.log(myArray);
console.log(mySet);

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

function hasDuplicate(array) {
  let uniqueElements = new Set(array);

  return uniqueElements.size !== array.length;
}

console.log(hasDuplicate([1, 2, 3, 4, 5]));
console.log(hasDuplicate([1, 2, 3, 4, 1]));

function getCount(str) {
  let vowelsCount = 0;

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowelsCount++;
        break;

      default:
        break;
    }
  }
  return vowelsCount;
}

console.log(getCount("awesome"));
console.log(getCount("Colt"));
console.log([...new Set("referee")].join(""));
