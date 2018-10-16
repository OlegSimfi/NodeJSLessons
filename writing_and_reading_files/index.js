//Sync
const fs = require('fs');

let file_read = fs.readFileSync('text.txt', 'utf8');
console.log(file_read);

const message = "Hello World!\n" + file_read;
fs.writeFileSync('some_new_file.txt', message);

//Async
fs.readFile('text.txt', 'utf8', function (err, data) {
    console.log(data);

});

fs.writeFile('some.txt', 'Async write', function (err, data) {
    console.log(data);

});

console.log("Test");



