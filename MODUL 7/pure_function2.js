const createPersonWithAge = (age, person) => {
  return { ...person, age };
};

const person = {
  name: "bobo",
};

const newPerson = createPersonWithAge(18, {...person});

console.log({
  person,
  newPerson,
});


console.log("------------------------------------------------");
console.log("Nama : Rama Dani");
console.log("NIM : 20533353");
console.log("Kelas : Teknik Informatika 6D");