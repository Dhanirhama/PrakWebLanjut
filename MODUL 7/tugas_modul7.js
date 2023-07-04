const books = [
  {
    title: "Buku 1",
    author: "Penulis 1",
    sales: 1200000,
  },
  {
    title: "Buku 2",
    author: "Penulis 2",
    sales: 800000,
  },
  {
    title: "Buku 3",
    author: "Penulis 3",
    sales: 1500000,
  },
  {
    title: "Buku 4",
    author: "Penulis 4",
    sales: 2000000,
  },
];

const greatAuthors = books.filter((book) => book.sales > 1000000).map((book) => `${book.author} adalah penulis buku ${book.title} yang sangat hebat`);

console.log(greatAuthors);
