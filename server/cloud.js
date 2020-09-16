const mega = require("megajs");

const cloud = ({ email, password }) => {
  let storage = new mega.Storage({
    email,
    password,
    autologin: false,
  });
  storage.login((error, metadata) => {
    if (error) {
      throw new Error(`Error ${error} at login`);
    }
  });

  const uploadFile = (file) => {
    const { name, data } = file;
    return new Promise((resolve, reject) => {
      const stream = storage.upload({ name }, data);

      stream.on("complete", (data) => resolve(`file uploaded`));
      stream.on("error", (error) => reject(`error uploading ${error}`));
      stream.end();
    });
  };

  return { uploadFile };
};

module.exports = cloud;
