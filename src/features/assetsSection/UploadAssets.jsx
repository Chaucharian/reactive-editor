import React from "react";
import UploadFileButton from "components/UploadFileButton";
import { useQuery } from "react-query";
const UploadAssets = ({}) => {
  const [{ data }] = useQuery;

  return <UploadFileButton onChange={(files) => console.log(files)} />;
};

export default UploadAssets;
