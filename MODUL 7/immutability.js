const user = {
  firstname: "Harry",
  lastname: "Prroter",
};

const createWithUserLastName = (newLastName, user) => {
  return { ...user, lastname: newLastName };
};

const newUser = createWithUserLastName("Potter", user);
console.log(newUser);

console.log("------------------------------------------------");
console.log("Nama : Rama Dani");
console.log("NIM : 20533353");