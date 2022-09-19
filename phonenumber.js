let phoneNumber = "+358401234567";
//phoneNumber = +358401234567;
//phoneNumber = "358401234567";

console.log(phoneNumber);
console.log(typeof(phoneNumber));

let firstChar = phoneNumber[0];

if (firstChar === "+") {
console.log("Number starts with a plus");
} else {
console.log("Number does not start with a plus");
}
