const http = require("http")
require("dotenv").config()

const server = http.createServer(
    (req, res) => {
        res.write("Hello, Javid")
        res.end()
    }
)

server.listen(process.env.PORT)