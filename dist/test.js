"use strict";
// if else
var nilai = 79;
if (nilai >= 90) {
    console.log("Grade A");
}
else if (nilai >= 60) {
    console.log("Grade B");
}
else {
    console.log("C");
}
var hero = "nana";
switch (hero) {
    case "Nana":
        console.log("hero kesukaan saya");
        break;
    case "zilong":
        console.log("kakanya nana");
        break;
    default:
        console.log("Bapake nana");
}
const Ipk = [2, 2, 3, 2, 4];
for (let i = 0; i < Ipk.length; i++) {
    if (i == 3) {
        console.log(`nilai indexing ke 3 : ${Ipk[i]}`);
    }
}
