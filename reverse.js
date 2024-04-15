let string = 'Hello! Welcome to my Velog. Ask me anything.';

function reverseString(string) {
  return string.split(' ').reverse().join('');
}

console.log(reverseString(string));
