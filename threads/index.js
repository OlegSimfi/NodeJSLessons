const fs = require('fs');

const myReadShort=fs.createReadStream(__dirname + '/article.txt','utf8');
const myWriteShort=fs.createWriteStream(__dirname + '/new.txt');


myReadShort.on('data', function (chunk) {
    console.log("New data received");
    myWriteShort.write(chunk);
});


