function ShortestWords(str) { 
    let temp = str.split(' ');
    let len = str.length;
    let j = 0;
    for(let i = 0; i < temp.length; i++){
        if (temp[i].length < len) 
        {
            len=temp[i].length; // set the length of the word to the length of the prev word
            j = i; // set the index of the word to the index of the prev word
        }
    }
    return temp[j] +' = '+  len;
}
console.log(ShortestWords("Hello my name is Mohamed Natsheh"));
console.log(ShortestWords("I am a student in AppleSeeds"));