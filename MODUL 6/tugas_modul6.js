// tugas A
class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

// tugas B membuat class Rabbit
class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true);
  }

  eat() {
    return `${this.name} sedang makan.`;
  }
}

// tugas C membuat kelas Eagle
class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false);
  }

  fly() {
    return `${this.name} sedang terbang.`;
  }
}

// Contoh penggunaan kelas Animal
console.log("SINGA");
const lion = new Animal("Lion", 5, true);
console.log("Jenis Hewan = ", lion.name);
console.log("Umur Hewan = ", lion.age);
console.log("Hewan Mamalia = ", lion.isMammal);
console.log("------------------------------------------------");

console.log("GAJAH");
const elephant = new Animal("Elephant", 10, true);
console.log("Jenis Hewan = ", elephant.name);
console.log("Umur Hewan = ", elephant.age);
console.log("Hewan Mamalia = ", elephant.isMammal);
console.log("------------------------------------------------");

// Contoh penggunaan kelas Rabbit
console.log("KELINCI");
const rabbit = new Rabbit("Kelinci", 2);
console.log("Jenis Hewan = ", rabbit.name);
console.log("Umur Hewan = ", rabbit.age);
console.log("Hewan Mamalia = ", rabbit.isMammal);
console.log("Kegiatan", rabbit.eat());
console.log("------------------------------------------------");

// contoh penggunaan instance dari kelas Rabbit
const myRabbit = new Rabbit("Labi", 2);
console.log("Nama Kelinci = ", myRabbit.name);
console.log("Umur Kelinci = ", myRabbit.age);
console.log("Hewan Mamalia = ", myRabbit.isMammal);
console.log("Kegiatan = ", myRabbit.eat());
console.log("------------------------------------------------");

// Contoh penggunaan kelas Eagle
console.log("ELANG");
const eagle = new Eagle("Elang", 3);
console.log("Jenis Hewan = ", eagle.name);
console.log("Umur Elang", eagle.age);
console.log("Hewan Mamalia", eagle.isMammal);
console.log("Kegiatan", eagle.fly());
console.log("------------------------------------------------");

// contoh penggunaan instance dari kelas Eagle
const myEagle = new Eagle("Elo", 4);
console.log("Nama Hewan Elang =", myEagle.name);
console.log("Umur Elang", myEagle.age);
console.log("Hewan Mamalia", myEagle.isMammal);
console.log("Kegiatan", myEagle.fly());
console.log("------------------------------------------------");

console.log("------------------------------------------------");
console.log("Nama : Rama Dani");
console.log("NIM : 20533353");