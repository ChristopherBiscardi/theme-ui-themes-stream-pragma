import React from "react";
import { MyThemeContext } from "./src/context";
import theme from "./src/theme";

export const wrapRootElement = ({ element }) => (
  <MyThemeContext.Provider value={{ theme }}>{element}</MyThemeContext.Provider>
);
