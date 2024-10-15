// Tipedata

var namasaya: string = "Devita Anggraeni";
console. log(namasaya);

var umur: number = 18
console. log("umur saya: ", umur);

var islife: boolean = true;
console.log("apakah hidup: ", islife);

let x: null = null;
console. log("nilai_x", x)

// non-primitif
// tipedata object
var person: {nama: string, umur: number}
= {nama: "Arlot", umur:10}
console.log('nama hero saya: ', person);

// array
var numbers: number[] = [1, 2, 3, 4, 5];
console.log("nomor urut: ", numbers);

// tuple
var user: [string, number] = ['Zilong', 65];
console.log("saya", user);

// any
var random: any = 25;
console.log("nilai belum diubah", random);
random = "tak ubah ah"
console.log("nilai setelah diubah", random);

// union
var id: string | number;
id = 123;
console.log(id);