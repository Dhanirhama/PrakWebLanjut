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
console.log("Jenis Hewan = ", lion.name); // Output: Lion
console.log("Umur Hewan = ", lion.age); // Output: 5
console.log("Hewan Mamalia = ", lion.isMammal); // Output: true
console.log("------------------------------------------------");

console.log("GAJAH");
const elephant = new Animal("Elephant", 10, true);
console.log("Jenis Hewan = ", elephant.name); // Output: Elephant
console.log("Umur Hewan = ", elephant.age); // Output: 10
console.log("Hewan Mamalia = ", elephant.isMammal); // Output: true
console.log("------------------------------------------------");

// Contoh penggunaan kelas Rabbit
console.log("KELINCI");
const rabbit = new Rabbit("Kelinci", 2);
console.log("Jenis Hewan = ", rabbit.name); // Output: Kelinci
console.log("Umur Hewan = ", rabbit.age); // Output: 2
console.log("Hewan Mamalia = ", rabbit.isMammal); // Output: true
console.log("Kegiatan", rabbit.eat()); // Output: Kelinci sedang makan.
console.log("------------------------------------------------");

// contoh penggunaan instance dari kelas Rabbit
const myRabbit = new Rabbit("Labi", 2);
console.log("Nama Kelinci = ", myRabbit.name); // Output: Labi
console.log("Umur Kelinci = ", myRabbit.age); // Output: 2
console.log("Hewan Mamalia = ", myRabbit.isMammal); // Output: true
console.log("Kegiatan = ", myRabbit.eat()); // Output: Labi sedang makan.
console.log("------------------------------------------------");

// Contoh penggunaan kelas Eagle
console.log("ELANG");
const eagle = new Eagle("Elang", 3);
console.log("Jenis Hewan = ", eagle.name); // Output: Elang
console.log("Umur Elang", eagle.age); // Output: 3
console.log("Hewan Mamalia", eagle.isMammal); // Output: true
console.log("Kegiatan", eagle.fly()); // Output: Elang sedang terbang.
console.log("------------------------------------------------");

// contoh penggunaan instance dari kelas Eagle
const myEagle = new Eagle("Elo", 4);
console.log("Nama Hewan Elang =", myEagle.name); // Output: Elo
console.log("Umur Elang", myEagle.age); // Output: 4
console.log("Hewan Mamalia", myEagle.isMammal); // Output: true
console.log("Kegiatan", myEagle.fly()); // Output: Elo sedang terbang.
console.log("------------------------------------------------");
