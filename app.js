const express = require('express');
//Below is nodejs core module which is fs module which we are requiring for file system.We use the file over here through stream.
const fs = require('fs');

let server = express();

//To create a readable stream.
let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); //=> utf8 for char encoding.

//Below function will listen to an event, event name is given as data.
myReadStream.on('data',function(info){
    console.log(info);
});



server.listen(3000,function(){
    console.log('port running on 3000');
});