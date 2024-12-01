import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import App from "../App";
import SignIn from "../pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/main",
    element: <Main />,
  },

  {
    path: "/signin",
    element: <SignIn />,
  },
]);
