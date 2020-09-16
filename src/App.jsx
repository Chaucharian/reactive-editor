import React from "react";
import { AppProvider } from "core";
import EditingScreen from "feature/EditingScreen";

const App = () => {
  return (
    <AppProvider>
      <EditingScreen />
    </AppProvider>
  );
};

export default App;
