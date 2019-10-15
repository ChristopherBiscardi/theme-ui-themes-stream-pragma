/** @jsx jsx */
import React from "react";

import { pragma } from "isolated-theme-ui/pragma";
import theme from "./theme";

export const MyThemeContext = React.createContext({
  theme,
  components: {
    h1: props => (
      <h1 {...props} sx={{ color: "primary" }}>
        From b <span>{props.children}</span>
      </h1>
    )
  }
});

export const jsx = pragma(MyThemeContext);
