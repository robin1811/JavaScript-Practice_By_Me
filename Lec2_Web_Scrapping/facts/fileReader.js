let fs = require("fs");
let cheerio = require("cheerio");

let f1KaData = fs.readFileSync("./f1.txt");
// console.log(f1KaData + "");

let f2KaData = fs.readFileSync("./f2.txt");
// console.log(f2KaData + "");

let htmlKaData = fs.readFileSync("./index.html");
// console.log(htmlKaData+"");
let ch = cheerio.load(htmlKaData);

let h1KaText = ch("h1").text();
console.log(h1KaText);


