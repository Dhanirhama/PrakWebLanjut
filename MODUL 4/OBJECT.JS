const spaceship = {
  nama: "Milenium Falcon",
  manufaktur: "Corellian Enginering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

spaceship.color = "Glossy Red";
spaceship["maxSpeed"] = 1300;

delete spaceship.manufaktur;

console.log(spaceship);
