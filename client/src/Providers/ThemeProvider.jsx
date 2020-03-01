import React, { useState, useEffect } from "react";
import { ThemeProvider } from "react-jss";

const StyleProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState("small");

  const handleScreenChange = () => {
    const { documentElement } = document;
    const { clientWidth } = documentElement;
    if (clientWidth > 320 && clientWidth < 480) setScreenSize("small");
    if (clientWidth >= 480 && clientWidth < 1024) setScreenSize("medium");
    if (clientWidth >= 1024 && clientWidth < 1700) setScreenSize("large");
    if (clientWidth >= 1700 && clientWidth < 2000) setScreenSize("xlarge");
  };

  useEffect(() => {
    handleScreenChange();
  }, [document.documentElement.clientWidth]);

  window.addEventListener("resize", handleScreenChange);

  const theme = {
    screenSize
  };
  // eslint-disable-next-line react/jsx-filename-extension
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyleProvider;
