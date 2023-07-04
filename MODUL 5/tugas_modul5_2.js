function findIndex(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
}

// Contoh penggunaan
const numbers = [2, 4, 6, 8, 10];
console.log(findIndex(numbers, 6));
console.log(findIndex(numbers, 3));

console.log("------------------------------------------------");
console.log("Nama : Rama Dani");
console.log("NIM : 20533353");