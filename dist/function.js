"use strict";
// Function Declaration
function sapa(nama, umur) {
    console.log("Halo, aku " + nama + "umurku " + umur);
}
sapa("Devita ", 18);
// Anonymous function
const pcikers = function (name, role) {
    return name + role;
};
let pick = pcikers("Nana ", "Mage");
console.log("Saya ingin pergi ke midlane menggunakan "
    + pick);
// Arrow Function
let multiplication = (a, b) => {
    return a * b;
};
let result = multiplication(8, 7);
console.log(result);
