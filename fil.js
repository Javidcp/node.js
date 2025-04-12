const fs = require("fs")
const http =require("http")

const serverFile = (req, res, filePath) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.StatusCode = 404;
            res.end("404 Not Found")
        } else {
            const contentType = filePath.endsWith('.html') ? 'text/html' : 'text/plain';
            res.setHeader('Content-Type', contentType)
            res.end(data)
        }
    })
}


const server = http.createServer(
    (req, res) => {
        if (req.url == '/') {
            serverFile(req, res, './index.html')
        } else {
            serverFile(req, res, `./${req.url}`)
        }
    }
)

server.listen(8080)