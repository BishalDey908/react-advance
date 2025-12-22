import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Mainlayout from "./Components/Layouts/Mainlayout";
import Home from "./Components/pages/Home";
import { homeRoutes } from "./utils/routes";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: homeRoutes,
    },
  ]);

  return <RouterProvider router={router}/>;
}

export default App;
