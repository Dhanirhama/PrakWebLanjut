class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber();
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("Anda tidak diperbolehkan untuk mengubah Nomor Rangka");
  }

  // method
  drive() {
    console.log(`${this.brand} ${this.color} Sedang Mengemudi`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} Sedang Berputar`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} Sedang Mengemudi ${direction}`);
  }

  _generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

const car = new Car("BMW", "Red", 200);
console.log(car._chassisNumber);
car._chassisNumber = "BMW-1";
console.log(car.chassisNumber);
console.log(car._generateChassisNumber());

console.log("------------------------------------------------");
console.log("Nama : Rama Dani");
console.log("NIM : 20533353");