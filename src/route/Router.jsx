import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RedirectlfAuthenticated from "../features/auth/components/RedirectlfAuthenticated";
import HomeloginPage from "../pages/HomeloginPage";
// import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import MeetingPage from "../pages/MeetingPage";
import BookingPage from "../pages/BookingPage";
import MymeetingPage from "../pages/MymeetingPage";
import ProfilePage from "../pages/ProfilePage";
import MybookingPage from "../pages/Mybooking";

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
      <MeetingPage />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/Booking",
    element: (
      // <ProtectedRoute>
      <BookingPage />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/myMeeting",
    element: (
      // <ProtectedRoute>
      <MymeetingPage />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      // <ProtectedRoute>
      <ProfilePage />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/Mybooking",
    element: (
      // <ProtectedRoute>
      <MybookingPage />
      // </ProtectedRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
