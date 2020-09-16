import React from "react";
import UploadIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";

const InputFile = styled.input`
  display: none;
`;

const UploadFileButton = ({ onChange, ...iconProps }) => {
  const onChangeHandler = (event) => {
    const fileItem = event.target;
    const files = fileItem.files;
    onChange(files);
  };

  return (
    <label>
      <InputFile onChange={onChangeHandler} type="file" multiple name="file" />
      <IconButton {...iconProps} color="primary" component="span">
        <UploadIcon />
      </IconButton>
    </label>
  );
};

export default UploadFileButton;
