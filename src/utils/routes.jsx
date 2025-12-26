import ProtectedRoute from "../Components/protectedRoute/ProtectedRoute";
import CurrentUser from "../pages/CurrentUser";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Register from "../pages/Registration";
import User from "../pages/User";
import Users from "../pages/Users";

export const homeRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/user/:id",
    element: <User />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/profile",
        element: <CurrentUser />,
      },
    ],
  },
];
