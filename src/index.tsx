import { GlobalStyles } from "./Styles/globalstyle";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Providers } from "./Context/index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
