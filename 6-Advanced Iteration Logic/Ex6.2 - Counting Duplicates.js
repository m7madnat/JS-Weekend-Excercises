function count_duplicate(a){
    let counts = {}   
    for(let i =0; i < a.length; i++){ 
        if (counts[a[i]]){
        counts[a[i]] += 1
        } else {
        counts[a[i]] = 1
        }
       }  
       for (let prop in counts){
           if (counts[prop] >= 2){
               console.log(prop + " counted: " + counts[prop] + " times.")
           }
       }
    }   
count_duplicate('abbcde')