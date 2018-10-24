let fs = require('fs-extra');
let randomstring = require('randomstring');
let path = require('path');
/*
fs.open('newFile.txt','w', function(err, data) {
    if(err) throw err;
    console.log('saved');
});

fs.appendFile ('newFile.txt', 'Content created', function(err){
    if (err) throw err;
    console.log('updated');
})

fs.writeFile ('newFile.txt', randomstring.generate(20), function(err){
    if (err) throw err;
    console.log('changed');
})

fs.readFile ('newFile.txt', 'utf8', function(err, data){
    if (err) throw err;
    console.log(data);
})


// write file when folders don't exist

    fs.outputFile('./folder1/folder2/file2.txt', 'folders are created as well', function(err){
    if(err) throw err;
    console.log('saved with folders as well');
    })
*/

let a = new Promise ((resolve,reject)=>{
    fs.outputFile('./folder1/folder2/file2.txt', 'folders are created as well', function(err){
        if(err) reject(err);
        console.log('saved with folders as well');
        resolve('saved');
        })  
})

console.log(a.then());

// a.then((result)=>{console.log(a)}) 


