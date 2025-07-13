import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Taskdetail from "../pages/Taskdetail";
import { SignIn, SignUp } from "@clerk/clerk-react";
import ProtectedRoute from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      //clerk auth routes
      { path: "sign-in/*", element: <SignIn routing="path" path="/sign-in"  /> },
      { path: "sign-up/*", element: <SignUp routing="path" path="/sign-up" /> },
      {
        path: "dashboard",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
      },
      {
        path: "tasks",
        element: <ProtectedRoute><Tasks /></ProtectedRoute>,
      },
      {
        path: "tasks/:id",
        element: <ProtectedRoute><Taskdetail /></ProtectedRoute>,
      },
    ],
  },
]);
