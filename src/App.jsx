import React from "react";
import { AppProvider } from "core/context";
import MainScreen from "screens/MainScreen";
import Theme from "./Theme";

const App = () => {
  return (
    <AppProvider>
      <Theme>
        <MainScreen />
      </Theme>
    </AppProvider>
  );
};

export default App;
