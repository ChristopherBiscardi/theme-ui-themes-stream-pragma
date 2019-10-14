/** @jsx jsx */
import React from "react";
import { pragma } from "isolated-jsx";
import theme from "../theme";
const MyThemeContext = React.createContext(theme);
const jsx = pragma(MyThemeContext);

export default props => (
  <h1
    sx={{
      color: "primary",
      fontFamily: "heading"
    }}
  >
    Hello from B
  </h1>
);
