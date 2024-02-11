import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main/Main";
import "./index.css";

import { store } from "./store/store";
import { Provider } from "react-redux";
import SectionAbout from "./Components/About/SectionAbout";
import SectionBlog from "./Components/Blog/SectionBlog";
import SectionGastroChop from "./Components/GastroChop/SectionGastroChop";
import SectionLaunch from "./Components/BuisnessLaunch/SectionLaunch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <SectionAbout />,
  },
  {
    path: "/blog",
    element: <SectionBlog />,
  },
  {
    path: "/gastro",
    element: <SectionGastroChop />,
  },
  {
    path: "/lunch",
    element: <SectionLaunch />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
