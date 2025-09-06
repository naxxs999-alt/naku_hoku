// const name = "nakul"
// const repoCount = 50

// console.log(`hello my name is ${name} and this is my ${repoCount}`);

const gameName = new String(`nakul-hc-com`)

// console.log(gameName[0]);
//   console.log(gameName.__proto__);


//   console.log(gameName.length)
//   console.log(gameName.toUpperCase())
    console.log(gameName.charAt(2))
console.log(gameName.indexOf(`k`))


const newstring = gameName.substring(0,4)   // this code does`nt count the 4th LETTER (naku)
console.log(newstring);

const anotherstring = gameName.slice(0,2)
console.log(anotherstring);

const newstringOne = "  nakul  "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://nakul.com/nakul%20purohit"

 console.log(url.replace(`%20`,`-`))

console.log(url.includes(`sundar`));

console.log(gameName.split(`-`))