function Mumbling(str) { 
    let temp = str.split('');
    let res = '';
    for(let i = 0; i < temp.length; i++)
    {
        res += temp[i].toUpperCase() + temp[i].toLowerCase().repeat(i)+'-';
    }
    return res.slice(0,res.length-1);
}
console.log(Mumbling("abcd"));
console.log(Mumbling("RqaEzty"));
console.log(Mumbling("cwAt"));