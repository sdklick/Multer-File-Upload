const express = require("express");
const app = express();
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname} - ${Date.now()}.jpg`);
    },
  }),
}).single("my_file");

app.post("/upload", upload, (req, res) => {
  res.send("File uploaded");
});

app.listen(7000, () => {
  console.log("server Started");
});
