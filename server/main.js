const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const cloud = require("./cloud");
const fs = require("fs");
const editor = require("../editor/main")();
const rootPath = path.join(__dirname);
const port = process.env.PORT || 8081;
const app = express();

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(rootPath));

app.listen(port, "0.0.0.0", () =>
  console.log(`Server running at ${port} port!`)
);

app.use(function (req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.post("/upload", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file was found",
      });
    } else {
      // matching for file input name
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

app.get("/video", function (req, res) {
  const path = `${rootPath}/input.mp4`;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    if (start >= fileSize) {
      res
        .status(416)
        .send("Requested range not satisfiable\n" + start + " >= " + fileSize);
      return;
    }

    const chunksize = end - start + 1;
    const file = fs.createReadStream(path, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
});
