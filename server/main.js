const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const rootPath = path.join(__dirname);
const port = process.env.PORT || 8081;
const app = express();
const cloud = require("./cloud");

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);
const mega = cloud({ email: "chaucharian@gmail.com", password: "19.rechuwi" });

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, "0.0.0.0", () =>
  console.log(`Server running at ${port} port!`)
);
app.use(express.static(rootPath));

app.use(function (req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.post("/video-crop", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      const file = req.files.file;
      const status = await mega.uploadFile(file);
      res.send({
        status,
      });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});
