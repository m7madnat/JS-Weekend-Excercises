function YearsAndCenturies(year) {
    if (year % 10 != 0)
        return Math.floor((year / 100) + 1);
    else
        return year / 100;
}
console.log(YearsAndCenturies(1705));
console.log(YearsAndCenturies(1900));
console.log(YearsAndCenturies(1601));
console.log(YearsAndCenturies(2000));