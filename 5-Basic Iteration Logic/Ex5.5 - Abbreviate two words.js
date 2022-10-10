function ConvertName(name) {
  name = name.split(" ");
  let first = name[0].charAt(0).toUpperCase();
  let last = name[1].charAt(0).toUpperCase();
  return first + '.' + last;
}
console.log(ConvertName("Sam Harris"));
console.log(ConvertName("Mohamed Natsheh"));
console.log(ConvertName("Patrick Feeney"));