// let http = require('http')

// const server = http.createServer(
//     (req, res) => {
//         res.write("I created server")
//         res.end()
//     }
// )
// server.listen(8080, () => {
//     console.log('Server runnig');
    
// })





//      route method
// const http = require('http')
// const url = require('url')

// const server = http.createServer(
//     (req, res) => {
//         const reqUrl = url.parse(req.url, true).pathname;
//         if (reqUrl == '/') {
//             res.write("This is home page")
//             res.end()
//         } else if (reqUrl == '/about') {
//             res.write("This is about page ")
//             res.end()
//         }
//     }
// )
// server.listen(8080)




// const http = require('http');

// const server = http.createServer(
//     (req, res) => {
//         if (req.url == '/') {
//             res.write('Welcome to Home Page')
//             res.end();
//         } else if (req.url == '/about') {
//             res.write('About Page')
//             res.end()
//         } else {
//             res.write('Not Found Page')
//             res.end()
//         }
//     }
// );


// server.listen(8080)

// console.log('Server is conneccting');


// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Welcome to my server!" }));
// });

// server.listen(3000, () => console.log("Server running on http://localhost:3000"));





// const http = require('http')
// const fs = require('fs')

// const serverFile = (req, res, filePath) => {
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             res.statusCode = 404;
//             res.end('404 Not Found')
//         } else {
//             const contentType = filePath.endsWith('.html') ? 'text/html' : 'text/plain'
//             res.setHeader('Content-Type', contentType)
//             res.end(data)
//         }
//     })
// }

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         serverFile(req, res, './index.html')
//     } else {
//         serverFile(req, res, `./${req.url}`)
//     }
// })

// server.listen(8080)




// const http = require("http");

// const server = http.createServer((req, res) => {
//     if (req.url === "/api" && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Hello from API!" }));
//     } else {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ error: "Not Found" }));
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000");
// });



// //  Promise
// function newPromise() {
//     let success = true;
//     return new Promise((res, rej) => {
//     if (success) {
//         res('Success');
//     } else {
//         rej('Rejected')
//     }
// })
// }
// newPromise()
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))



// //  Async / Await
// const dataGet = () => {
//     return new Promise((res, rej) => {
//         res('Data success')
//     })
// }
// async function getting() {
//     console.log('Fetching');
//     let result = await dataGet()
//     console.log(result);
// }
// getting()






// //  Transform
// const { Transform } = require("stream");

// const upperCaseTransform = new Transform({
//     transform(chunk, encoding, callback) {
//         this.push(chunk.toString().toUpperCase());
//         callback();
//     }
// });
// process.stdin.pipe(upperCaseTransform).pipe(process.stdout);
