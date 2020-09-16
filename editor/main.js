const ffmpeg = require("fluent-ffmpeg");

const editor = () => {
  const merge = (files, outputFile, outputPath) => {
    return new Promise((resolve, reject) => {
      console.log("Merging started!");
      const editorInstance = ffmpeg()
        .on("error", (error) => {
          reject(`Error merging ${error}`);
        })
        .on("progress", (progress) => {
          console.log(progress.timemark);
        })
        .on("end", () => {
          resolve(`${outputFile} : Processing finished!`);
        });
      files.map((file) => editorInstance.input(file));

      editorInstance.mergeToFile(outputFile, outputPath);
    });
  };

  const crop = () => {
    return new Promise((resolve, reject) => {
      ffmpeg(rootPath + "/input.mp4") //Input Video File
        .output(rootPath + `/output${count}.mp4`) // Output File
        .audioCodec("libmp3lame") // Audio Codec
        .videoCodec("libx264") // Video Codec
        .setStartTime(03) // Start Position
        .setDuration(2) // Duration
        .on("end", function (err) {
          if (!err) {
            console.log("Conversion Done");
            res.send("Video Cropping Done");
          }
          resolve("crop successuflly");
        })
        .on("error", (error) => {
          console.log("Editor error: ", +error);
          reject(error);
        })
        .run();
    });
  };

  return {
    merge,
    crop,
  };
};

module.exports = editor;
