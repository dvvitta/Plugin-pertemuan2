// Function Declaration
function sapa(nama : string, umur : number) {
    console.log("Halo, aku " + nama  +  "umurku " + umur);
}
sapa("Devita ", 18)

// Anonymous function
const pcikers = function (name : string, role : string) {
    return name + role
}
let pick = pcikers("Nana ", "Mage")
console.log("Saya ingin pergi ke midlane menggunakan " 
    + pick);

// Arrow Function
let multiplication = (a : number, b : number) => {
    return a * b
}
let result = multiplication(8, 7)
console.log(result);


