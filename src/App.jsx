import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Mainlayout from "./Components/Layouts/Mainlayout";
import Home from "./Components/pages/Home";
import { homeRoutes } from "./utils/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import {QueryClientProvider} from "@tanstack/react-query"

function App() {
  const queryClient = new QueryClient()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: homeRoutes,
    },
  ]);

  

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
