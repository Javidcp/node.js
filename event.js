const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on("message", (data) => {
    console.log(data.text);
})

emitter.emit("message", { text: 'User Logged'})





//      JSON

// const obj = {
//     name : 'javid',
//     place : 'mala'
// }
// const jso = JSON.stringify(obj)
// console.log(jso);


// const obj2 = `{
//     "name" : "javid",
//     "place" : "Kondotty"
// }`
// const jso2 = JSON.parse(obj2)
// console.log(jso2);



const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello, ');
writeStream.write('this is streamed text.\n');
writeStream.end('Goodbye!');

writeStream.on('finish', () => {
    console.log('File Writing Completed.');
});


// fs.unlink('output.txt', (err) => {
//     console.log(err);
// })



// const path = require('path')

// const filepath = 'fold/text.txt'

// console.log(path.extname(filepath));


