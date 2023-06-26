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
    console.log("You are not allowed to change the chassis number");
  }

  // method
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

  _generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

const car = new Car("BMW", "Red", 200);
console.log(car._chassisNumber);
car.chassisNumber = "BMW-1";
console.log(car.chassisNumber);
console.log(car._generateChassisNumber());
