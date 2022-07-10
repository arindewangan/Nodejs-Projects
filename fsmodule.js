const fs = require('fs');


fs.readFile('file.txt', 'utf8', (error, data) => {
    console.log(error, data);
});

console.log("Finished Reading File");

// const a = fs.readFileSync('file.txt');
// console.log(a);
// console.log(a.toString());

// fs.writeFile('file.txt', 'This is a data', () => {
//     console.log("Written to the file");
// });

const b = fs.writeFileSync('file.txt', 'This is a data 2')
console.log(b);

console.log('Finished Writing');