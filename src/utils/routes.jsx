import About from "../Components/pages/About";
import Home from "../Components/pages/Home";

export const homeRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
];