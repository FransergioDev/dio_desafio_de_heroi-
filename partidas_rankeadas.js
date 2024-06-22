const rankings = [
  {
    exp: 10,
    name: "Ferro",
  },
  {
    exp: 20,
    name: "Bronze",
  },
  {
    exp: 50,
    name: "Prata",
  },
  {
    exp: 80,
    name: "Ouro",
  },
  {
    exp: 90,
    name: "Diamante",
  },
  {
    exp: 100,
    name: "Lendário",
  },
  {
    exp: 101,
    name: "Imortal",
  },
];

const ranking = (experience) => {
  for (let index = 0; index < rankings.length; index++) {
    const ranking_current = rankings[index];
    if (experience <= ranking_current.exp) return index;
  }
};

((victories = 73) => {
  console.log(
    `"O Herói tem de saldo de **${victories}** está no nível de **${
      rankings[ranking(victories)].name
    }**"`
  );
})();
