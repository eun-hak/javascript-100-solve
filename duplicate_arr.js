const exampleStr = 'aabbbeedudaacca';

let answer = '';
for (let i = 0; i < exampleStr.length; i++) {
  if (i === exampleStr.indexOf(exampleStr[i])) {
    answer += exampleStr[i];
  }
}

console.log(answer);
