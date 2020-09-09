import React, { useRef } from "react";

const FileUpload = () => {
  const formRef = useRef(null);

  const submit = (form) =>
    fetch("http://localhost:8081/video-crop", {
      method: "POST",
      body: form,
    });

  const onChange = (event) => {
    const fileItem = event.target;
    const files = fileItem.files;
    const file = files[0];
    const formData = new FormData();

    formData.append("file", file);
    submit(formData).then(() => formRef.current.reset());
  };

  return (
    <form onChange={onChange} ref={formRef}>
      <input type="file" name="file" />
    </form>
  );
};

export default FileUpload;
