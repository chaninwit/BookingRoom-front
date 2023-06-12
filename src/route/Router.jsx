import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RedirectlfAuthenticated from "../features/auth/components/RedirectlfAuthenticated";
import HomeloginPage from "../pages/HomeloginPage";
// import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import Header from "../layouts/Header";
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
    element: (
      // <ProtectedRoute>
      <HomeloginPage />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/Meeting",
    element: (
      // <ProtectedRoute>
      <Header />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/Booking",
    element: (
      // <ProtectedRoute>
      <Header />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/myMeeting",
    element: (
      // <ProtectedRoute>
      <Header />
      // </ProtectedRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
