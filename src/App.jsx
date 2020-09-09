import React from "react";
import { AppProvider } from "core";
import FileUpload from "components/FileUpload";

const App = () => {
  return (
    <AppProvider>
      <FileUpload />
    </AppProvider>
  );
};

export default App;
