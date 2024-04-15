const exampleArray = [4, 2, 9, 2, 4, 6, 8, 9];

const uniqueArray = exampleArray.filter((element, index) => {
  return exampleArray.indexOf(element) === index;
});

console.log(uniqueArray);
