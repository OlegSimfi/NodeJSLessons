const fs = require('fs');

//Delete
fs.unlink('file.txt',function () {});

//Create directory
fs.mkdir('new-one', function () {
    fs.writeFile('./new-one/some_new.txt', "Hello World!",function () {
      console.log('Ok!')
    });
});

//Delete directory
fs.rmdir('new-one', function () {});
