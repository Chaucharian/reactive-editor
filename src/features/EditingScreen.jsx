import React from "react";
import { UploadAssets } from "features/assetsSection";

const EditingScreen = () => {
  return (
    <>
      <video controls autoplay>
        <source src="http://localhost:8081/video" type="video/mp4" />
      </video>
      <UploadAssets />
    </>
  );
};

export default EditingScreen;
