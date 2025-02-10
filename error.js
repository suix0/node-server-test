const errorFile = (res) => {
  const errorFile = path.join(__dirname, "public", "404.html");
  fs.readFile(errorFile, (err, data) => {
    res.send(data);
  });
};

export default errorFile;
