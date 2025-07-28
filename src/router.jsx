import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";

export const routerTest = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/header",
        element: <Header />,
      },
    ],
  },
]);
