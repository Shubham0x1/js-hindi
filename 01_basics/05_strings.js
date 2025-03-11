const name="Shubham";
const repoCount=50
console.log(name +repoCount + "Value"); //This is not a good practice.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //String interpolation modern way.
const gameName = new String('hitesh-hc')
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

const newStringOne="   shubham    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url= "https://shubham.com/shubham%20gusain"

console.log(url.replace('%20','-'))
// console.log(url.includes('Shubham'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));




