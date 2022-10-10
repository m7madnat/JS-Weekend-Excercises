function toCamelCase(str) {
    let str2;
    if(str.includes('-'))
        str2 = str.split('-');
    else if(str.includes('_'))
        str2 = str.split('_');
    for(let i=1; i < str2.length; i++)
    {
        str2[i] = str2[i].replace(str2[i].charAt(0),str2[i].charAt(0).toUpperCase())
    }
    return str2.join('');
}

console.log(toCamelCase("the-stealth-warrior")); // theStealthWarrior
console.log(toCamelCase("The_Stealth_Warrior")); // TheStealthWarrior
