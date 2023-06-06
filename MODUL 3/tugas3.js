let score = 90;
let result;

if (score >= 90) {
  result = "Selamat anda mendapat nilai A";
} else if (score >= 80 && score <= 89) {
  result = "Anda mendapat nilai B";
} else if (score >= 70 && score <= 79) {
  result = "Anda mendapat nilai C";
} else if (score >= 60 && score <= 69) {
  result = "Anda mendapat nilai D";
} else {
  result = "Anda mendapat nilai E";
}

console.log(result);
