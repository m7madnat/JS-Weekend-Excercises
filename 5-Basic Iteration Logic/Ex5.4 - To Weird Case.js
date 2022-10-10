function toWeirdCase(string){  
  return string.split(' ').map(word => { // split string into array of words
    return word.split('').map((letter, index) => { // split each word into array of letters
      return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase(); // if index is even, return uppercase letter, else return lowercase letter
    }).join(''); // join letters back into word
  }).join(' '); // join words back into string
}

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));