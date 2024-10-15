"use strict";
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    great() {
        console.log(`Hi, nama saya ${this.name} rumah saya di kota ${this.address}`);
    }
}
class Employe extends Person {
    constructor(name, address, jobTittle) {
        super(name, address);
        this.jobTittle = jobTittle;
    }
    work() {
        console.log(`Aku ${this.name} bekerja sebagai ${this.jobTittle}`);
    }
}
let employe1 = new Employe(`Devita`, "Purwahamba", `CEO`);
employe1.great();
employe1.work();
