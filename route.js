const http = require("http")


const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write(`<h1>Home Page</h1><button onclick="window.location.href='/about'">About</button>`)
        res.end()
    } else if (req.url == '/about') {
        res.write(`<button onclick='window.location.href="/"'>Home</button>`)
        res.end()
    } else {
        res.writeHead(404);
        res.end('Page Not Found')
    }
})



server.listen(5050)