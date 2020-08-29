import React from "react";
import { useAppContext, AppProvider } from "core";

const Test = () => {
  const [state] = useAppContext();

  return <h1>{state.testing}</h1>;
};

const App = () => {
  return (
    <AppProvider>
      <Test />
    </AppProvider>
  );
};

export default App;
