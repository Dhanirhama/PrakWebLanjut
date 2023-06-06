let language = "French";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Moring!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimazu!";
        break;
    default:
        greeting = "Selamat Pagi";
}

console.log(greeting);