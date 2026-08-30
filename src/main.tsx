// Copyright (C) 2026 Isabella Katalina Peña Marín
//
// This program is Open Source: you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// any later version.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Providers } from "@/shared/components/Providers/Providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
);
