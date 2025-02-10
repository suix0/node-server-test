import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 5000;

app.get("/", (req, res) => {
  const indexFile = path.join(__dirname, "public", "index.html");
  res.sendFile(indexFile);
});

app.get("/about", (req, res) => {
  const aboutFile = path.join(__dirname, "public", "about.html");
  res.sendFile(aboutFile);
});

app.get("/contact", (req, res) => {
  const contactFile = path.join(__dirname, "public", "contact-me.html");
  res.sendFile(contactFile);
});

app.use((req, res) => {
  const errorFile = path.join(__dirname, "public", "404.html");
  res.sendFile(errorFile);
});

app.listen(PORT, () =>
  console.log(`Server running at port http://localhost:${PORT}`)
);
