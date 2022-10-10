function PeopleOnBus(p){
    let peopleOnBus = 0;
    p.forEach(el => {
        peopleOnBus += el[0]-el[1];
    });
    return peopleOnBus;
}

console.log('how many people left in the bus:',PeopleOnBus([[10,0],[0,5],[5,8]]));