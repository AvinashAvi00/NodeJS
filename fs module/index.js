const fs = require('fs');
const { isFunction } = require('util');

console.log('READ START');
// Asynchronous way to read file
// fs.readFile('input.txt', function(err, data) {
//     if (err) {
//         console.log('Error:', err);
//         return err;
//     }
//     console.log('Data: ', data.toString);
//     console.log('READ END');
//     return data;
// })

// console.log('OTHER STUFF');

// Synchrounous way to read file

// var data = fs.readFileSync('input.txt');
// console.log('Data: ', data.toString());
// console.log('READ END');
// console.log('OTHER STUFF');

// Read > open + read 

// fs.open('input.txt', 'r+', function(err, fd){
//     if (err){
//         console.log('Error in opening file: ', err);
//     }
//     console.log("File open successfully!");
//     fs.read(fd, buf, 0, buf.length, 0, function(er, bytes)
//     if (er){ 

//     })
// })

// fs.writeFile('input.txt', 'Pw skills', function(err){
//     if (err){
//         console.log('Error in writing file!');
//     } else{
//         console.log('success in writing file!');
//     }
// });

//Append to file

fs.appendFile('input.txt', '-- Avinash', 'utf8', function(err){
    if (err){
        console.log('Error in appending file!');
    } else{
        console.log('success in appending file!');
    }
})

//Deleting ile
// fs.unlink('input.txt', function(err){
//     if (err){
//                 console.log('Error in deleting file!');
//             } else{
//                 console.log('success in deleting file!');
//             }
// })