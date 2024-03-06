import { createBrowserRouter } from "react-router-dom";
import "./styles/global.scss";
import NavLayout from "./layouts/NavLayout";
import Home from "./pages/Home/Home";
import Iphone from "./pages/Iphone/Iphone";
import Mac from "./pages/Mac/Mac";
import Airpods from "./pages/Airpods/Airpods";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/iphone", element: <Iphone /> },
      { path: "/mac", element: <Mac /> },
      { path: "/airpods", element: <Airpods /> },
      { path: "/profile" },
      { path: "/cart" },
      { path: "/favorites" },
    ],
  },
]);
