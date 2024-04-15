function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}

const main = async () => {
  console.log('1번');
  await delay(4);
  console.log('2번!!!');
};
main();

// output
// '1번'
// ...4초 후...
// '2번!!!'
