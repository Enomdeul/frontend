import {createBrowserRouter} from "react-router";
import {Home} from "./pages/Home";
import {Signup} from "./pages/signup/Signup";
import {Onboarding} from "./pages/signup/Onboarding";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
