class Person {
    name : string
    address : string
    
    constructor (name: string, address:string){
        this.name = name
        this.address = address
    }

    great() {
        console.log(`Hi, nama saya ${this.name} rumah saya di kota ${this.address}`);
    }
}

class Employe extends Person {
    jobTittle : string
    
    constructor(name : string, address:string, 
        jobTittle:string) {
            super(name, address)
            this.jobTittle = jobTittle
        }

        work(){
            console.log(`Aku ${this.name} bekerja sebagai ${this.jobTittle}`);

        }
}

let employe1 = new Employe(`Devita`, "Purwahamba", `CEO`)
employe1.great()
employe1.work()