// Controls
const host = "localhost"
const port = 2054
const dir = "dist"

// Mail controls
const mailService = "gmail"
const mailUser = "_@gmail.com"
const mailPass = ""
const mailTarget = "_@gmail.com"


// Imports
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import nodemailer from 'nodemailer';

// Service
const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".wav": "audio/wav",
    ".mp4": "video/mp4",
    ".woff": "application/font-woff",
    ".ttf": "application/font-ttf",
    ".eot": "application/vnd.ms-fontobject",
    ".otf": "application/font-otf",
    ".wasm": "application/wasm",
    "": "page"
}

let tranporter = nodemailer.createTransport({
    service: mailService,
    auth: {
        user: mailUser,
        pass: mailPass
    }
})

const getContentType = url => mimeTypes[String(path.extname(url).toLowerCase())] || "application/octet-stream";

const getFilePath = (url) => url === "/" ? dir + "/index.html" : dir + url;

function serverListener(request, response) {
    let filePath = getFilePath(request.url)
    if (getContentType(filePath) === "page") { filePath = `${dir}/index.html` }
    //console.log("request " + filePath + " content type " + getContentType(filePath));
    //console.log(request.url);
    if (request.url === "/send") {
        let data = "";
        request.on("data", chunk => {
            data += chunk
        })
        request.on("end", () => {
            console.log(data);
            response.end("success")
            tranporter.sendMail(
                {
                    from: mailUser,
                    to: mailTarget,
                    subject: "test message",
                    text: JSON.stringify(data)
                })
        })

    } else {
        fs.readFile(filePath, function (error, content) {
            if (error) {
                response.writeHead(500)
                response.end("internal server error")
            } else {
                response.writeHead(200, { "Content-Type": getContentType(filePath) })
                response.end(content, "utf-8")
            }
        })
    }

}

// Server
http.createServer(serverListener).listen(port, host, console.log(`Server running at http://${host}:${port}`))
