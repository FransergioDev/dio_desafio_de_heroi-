const name = "Beowulf";
const experience = 5000;
const levels = [
  {
    exp: 1000,
    name: "Ferro",
  },
  {
    exp: 2000,
    name: "Bronze",
  },
  {
    exp: 5000,
    name: "Prata",
  },
  {
    exp: 7000,
    name: "Ouro",
  },
  {
    exp: 8000,
    name: "Platina",
  },
  {
    exp: 9000,
    name: "Ascendente",
  },
  {
    exp: 10000,
    name: "Imortal",
  },
  {
    exp: 10001,
    name: "Radiante",
  },
];

let level = 0;
for (let index = 0; index < levels.length; index++) {
  const level_current = levels[index];
  if (experience <= level_current.exp) {
    level = index;
    break;
  }
}

console.log(
  `"O Herói de nome **${name}** está no nível de **${levels[level].name}**"`
);
