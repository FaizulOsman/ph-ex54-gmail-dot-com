import Main from "./layouts/Main";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/inbox/primary", element: <Header></Header> },
      { path: "/navbar", element: <NavBar></NavBar> },
    ],
  },
]);
