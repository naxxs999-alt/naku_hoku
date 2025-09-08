const marvel_HEROES = ["ironman", "thor","hulk"];
const dc_HEROES = ["batman", "flash","superman"];

// marvel_HEROES.push(dc_HEROES);

// console.log(marvel_HEROES);
// console.log(marvel_HEROES[3][1]);

// const allheroes = marvel_HEROES.concat(dc_HEROES);
// console.log(allheroes);

const allheroes = [...marvel_HEROES, ...dc_HEROES ];   // spread operator

// console.log(allheroes);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5,]]]

const real_another_array = another_array.flat(Infinity);    // flat method helps to make single array from multi dimensional array
console.log(real_another_array); 



console.log(Array.isArray("nakul"));
console.log(Array.from("nakul"));
console.log(Array.from({name:"nakul"}));  

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

