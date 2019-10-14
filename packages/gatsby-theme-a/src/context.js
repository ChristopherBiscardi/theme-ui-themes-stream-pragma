/** @jsx jsx */
import React from "react";

import { pragma } from "isolated-theme-ui/pragma";
import theme from "./theme";
// import Styled from "./styled";
// console.log(Styled);

export const MyThemeContext = React.createContext({
  theme,
  components: {
    h1: props => <h1 {...props} sx={{ color: "primary" }} />
  }
});

export const jsx = pragma(MyThemeContext);
