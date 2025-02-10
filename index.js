import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 5000;

const server = http.createServer((req, res) => {
  let initialFile = "index.html";

  switch (req.url) {
    case "/":
      initialFile = "index.html";
      break;
    case "/about":
      initialFile = "about.html";
      break;
    case "/contact":
      initialFile = "contact-me.html";
      break;
    default:
      initialFile = "404.html";
  }

  const requestedFileLocation = path.join(__dirname, "public", initialFile);

  const contentType = { "Content-Type": "text/html" };

  fs.readFile(requestedFileLocation, (err, data) => {
    if (err) throw err;
    res.writeHead(200, contentType);
    res.end(data);
  });
});

server.listen(5000, () =>
  console.log(`Server running at port http://localhost:${port}`)
);
