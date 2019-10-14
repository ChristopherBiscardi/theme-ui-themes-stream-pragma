import React from "react";

import { pragma } from "isolated-theme-ui/pragma";
import theme from "./theme";

export const MyThemeContext = React.createContext({ theme });

export const jsx = pragma(MyThemeContext);
