function longest(s1, s2) {
    let all = s1 + s2
    let temp = {}   
    for(let i =0; i < all.length; i++){ 
        if (temp[all[i]]){
        temp[all[i]] += 1
        } else {
        temp[all[i]] = 1
        }
       }  
       let result = ""
       for (let prop in temp){
           result += prop
       }
       return result.split("").sort().join("")
    }   
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))
console.log(longest("abcdefghijklmnopqrstuvwxyz", "xxxxyyyyabklmopq"))