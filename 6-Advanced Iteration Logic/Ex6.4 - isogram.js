function isIsogram(str)
{
    let letters = str.toLowerCase().split('');
    let temp = {};
    for (let i = 0; i < letters.length; i++)
    {
        if (temp[letters[i]])
        {
            return false;
        }
        temp[letters[i]] = true;
    }
    return true;   

}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));