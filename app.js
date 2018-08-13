//Readable and writable streams.

const express = require('express');
//Below is nodejs core module which is fs module which we are requiring for file system.We use the file over here through stream.
const fs = require('fs');

let server = express();

//To create a readable stream.
// let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); //=> utf8 for char encoding.
//Use write stream to send the data anywhere from readstream.
// let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// //Below function will listen to an event, event name is given as data.
// myReadStream.on('data',function(info){
//     try{    
//     console.log(info);
// myWriteStream.write(info);    
//     }catch(err){
//         throw err;
//     }
// });

//We will be using .pipe(), which automatically read data from read stream and transfer it to the write stream.
// myReadStream.pipe(myWriteStream);

server.get('/',function(req,res){
    let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000,function(){

    console.log('port running on 3000');
});