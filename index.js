// const modu = require('./modules')
// modu.sayHello()

// console.log(modu.person.name);
// modu.person.greet()



//  //  Gobal object
// const si = setInterval(() => {
//     console.log("Hello NodeJS");
// }, 1000)

// setTimeout(() => {
//     clearInterval(si)
// }, 3100)



//  //  OS
// const os = require('os')

// console.log(os.totalmem());




//  //  File System [ fs ] 
const fs = require('fs');
// const { basename, dirname, extname } = require('path');

// // Create File
//     fs.writeFile('new.txt', 'This my created file', 
//         (err) => {
//         if (err) console.log(err)
//     })

// // Read File
//     fs.readFile('./new.txt', 'utf-8', 
//         (err, data) => {
//         if (err) console.log(err);
//         console.log(data);
//     })

// //  Append
//     fs.appendFile(
//         './new.txt', 
//         'heyyy', 
//         (err) => {
//         if (err) console.log(err);
//     })

// //  Rename
//     fs.rename('./new.txt', './sample.txt', 
//         (err) => console.log(err)
//     )

// //  Delete
//     fs.unlink('./sample.txt', 
//         (err) => {
//         if (err) console.log(err);
//     })

// // check file exist
// if (fs.existsSync('example.txt')) {
//     console.log('File Exists!');
// } else {
//     console.log('File Not Found!');
// }

// // create directory
// fs.mkdir('myFolder', (err) => {
//     if (err) throw err;
//     console.log('Folder Created!');
// });

// //read directory
// fs.readdir('myFolder', (err, files) => {
//     if (err) throw err;
//     console.log('Folder Contents:', files);
// });

// // remove directory
// fs.rmdir('myFolder', (err) => {
//     if (err) throw err;
//     console.log('Folder Deleted!');
// });


const myPromise = new Promise((resolve, reject) => {
    let success = true;
    
    setTimeout(() => {
        if (success) {
            resolve("✅ Operation Successful!");
        } else {
            reject("❌ Operation Failed!");
        }
    }, 2000);
});

// Handling the Promise
myPromise
    .then(result => console.log(result))  // Runs if resolved
    .catch(error => console.log(error))   // Runs if rejected
    .finally(() => console.log("🕒 Promise Completed!"));



// const file = '/fold/text.txt'

// fs.rename('new.txt', 'sam.txt', (err) => {
//     console.log(err);
// })


// fs.unlink('sam.txt', (err) => {
//     console.log(err);
    
// })

// fs.appendFile('sample.txt', 'How are you', (err) => {
//     console.log(err);
    
// })

// fs.writeFile('sample.txt', 'Hoii', (err) => {
//     console.log(err);
    
// })

// fs.readFile('sample.txt', 'utf-8', (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
// })



// fs.mkdir('myFold', (err) => {
//     if (err) console.log(err)
        
// })
// fs.writeFile('myFold/new.txt', 'Hello, How are you', (err) => {
//     if (err) console.log(err);
    
// })


// fs.mkdir('pre', (err) => {
//     if (err) console.log(err)
//         fs.writeFile('pre/orev.txt', 'Hello, How are you', (err) => {
//             if (err) console.log(err);
            
//         })
// })


// fs.readdir('pre', (err, file) => {
//     if (err) console.log(err);
//     console.log('file',file);
// })

// fs.unlink('pre/orev.txt', (err) => {
//     if (err) console.log(err);
    
// })

// fs.rmdir('pre', (err) => {
//     if (err) console.log(err);
//     console.log('Success');
    
// })




// const fs = require('fs')

// setTimeout(() => {
//     console.log("TimeOut")
// }, 100)

// fs.readFile('nex.txt', () => {
//     console.log("File read")
// })

// Promise.resolve().then(() => console.log("Promise"))
// process.nextTick(() => console.log("Process tick"))

// function a() {
//     console.log("Function");
// }
// a()

// console.log("End");


fs.unlink('myFold/new.txt', (err) => {
    if (err) console.log(err);
    
})

fs.rmdir('myFold', (err) => {
    if (err) console.log(err);
    
})