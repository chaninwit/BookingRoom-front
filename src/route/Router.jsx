import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HomeloginPage from "../pages/HomeloginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <HomeloginPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
