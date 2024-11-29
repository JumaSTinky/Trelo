import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Main from "../pages/Main";
import SignIn from "../pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "main",
        element: <Main/>,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);
