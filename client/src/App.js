import React from "react";
import AppRoutes from "./AppRoutes";
import StyleProvider from "./Providers/ThemeProvider";

function App(props) {
  return (
    <StyleProvider>
      <AppRoutes />
    </StyleProvider>
  );
}

export default App;
