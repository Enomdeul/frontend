import {createBrowserRouter} from "react-router";
import {Home} from "./pages/Home";
import {Signup} from "./pages/signup/Signup";
import {Splash} from "./pages/signup/Splash";
import {CreateCard} from "./pages/CreateCard";
import {Login} from "./pages/login/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/splash",
    element: <Splash />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/card/create",
    element: <CreateCard />,
  },
]);
