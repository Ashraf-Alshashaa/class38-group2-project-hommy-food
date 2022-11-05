import React from "react";
import ReactDOM from "react-dom";

import AppWrapper from "./AppWrapper";
import App from "./App";

import { AuthProvider } from "./contexts/authentication";

ReactDOM.render(
  <AppWrapper>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AppWrapper>,
  document.getElementById("root")
);
