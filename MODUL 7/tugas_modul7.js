const books = [
  {
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    sales: 1200000,
  },
  {
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    sales: 800000,
  },
  {
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    sales: 1500000,
  },
  {
    title: "Tenggelamnya Kapal Van Der Wijck",
    author: "Abdul Malik Karim Amrullah (Buya Hamka)",
    sales: 2000000,
  },
];

const greatAuthors = books.filter((book) => book.sales > 1000000).map((book) => `${book.author} adalah penulis buku ${book.title} yang sangat hebat`);

console.log(greatAuthors);

console.log("------------------------------------------------");
console.log("Nama : Rama Dani");
console.log("NIM : 20533353");
console.log("Kelas : Teknik Informatika 6D");