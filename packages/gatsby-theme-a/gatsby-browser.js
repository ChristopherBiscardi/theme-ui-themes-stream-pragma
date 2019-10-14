import React from "react";
import { MyThemeContext, jsx } from "./src/context";
import theme from "./src/theme";

export const wrapRootElement = ({ element }) => (
  <MyThemeContext.Provider
    value={{
      theme,
      components: {
        h1: props => jsx("h1", { ...props, sx: { color: "pink" } })
      }
    }}
  >
    {element}
  </MyThemeContext.Provider>
);
