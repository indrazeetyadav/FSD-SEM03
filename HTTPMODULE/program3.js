// CREATE YOUR OWN SERVER USING HTTP MODULE

const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.write("hello world");

    res.end();
});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});