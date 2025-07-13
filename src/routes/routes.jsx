import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Taskdetail from "../pages/Taskdetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "", 
        element: <Home /> 
      },
      { 
        path: "dashboard", 
        element: <Dashboard /> 
      },
      { 
        path: "tasks", 
        element: <Tasks /> 
      },
      { 
        path: "tasks/:id", 
        element: <Taskdetail /> 
      },
    ],
  },
]);
