let score = 70;
let result;

if (score >= 90) {
  result = "Selamat Anda Mendapat Nilai A";
} else if (score >= 80 && score <= 89) {
  result = "Anda mendapat Nilai B";
} else if (score >= 70 && score <= 79) {
  result = "Anda mendapat Nilai C";
} else if (score >= 60 && score <= 69) {
  result = "Anda mendapat Nilai D";
} else {
  result = "Anda mendapat Nilai E";
}

console.log(result);

console.log("------------------------------------------------");
console.log("Nama : Rama Dani");
console.log("NIM : 20533353");
console.log("Kelas : Teknik Informatika 6D");