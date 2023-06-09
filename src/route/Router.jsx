import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HomeloginPage from "../pages/HomeloginPage";
import RedirectlfAuthenticated from "../features/auth/components/RedirectlfAuthenticated";

const router = createBrowserRouter([
  {
    path: "/Guest",
    element: (
      <RedirectlfAuthenticated>
        <HomePage />
      </RedirectlfAuthenticated>
    ),
  },
  {
    path: "/",
    element: <HomeloginPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
