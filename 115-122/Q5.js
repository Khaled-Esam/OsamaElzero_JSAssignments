const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

let { title: t } = game;
console.log(`My Favourite Games Style Is ${t} Style`);

let { developer: d } = game;
console.log(`And I Love ${d} Games`);

let [o, a] = Object.keys(game.releases);
let [u, j] = game.releases["Oath In Felghana"];
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
console.log(`Although I Love ${a}`);

let {US : u_price, JAP : j_price } = game.releases[a]
console.log(`${a} Price in USA Is ${u_price}`);

console.log(`${a} Price in Japan Is ${j_price}`);

const {Origin : or} = game.releases
console.log(`Origin Price Is ${or}`);
