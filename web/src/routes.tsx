import {createBrowserRouter} from "react-router";
import {Home} from "./pages/Home";
import {Signup} from "./pages/signup/Signup";
import {Splash} from "./pages/signup/Splash";
import {CreateCard} from "./pages/CreateCard";
import {Login} from "./pages/login/Login";
import {MyCard} from "./pages/MyCard";
import { OfferedList } from "./pages/OfferedList";
import { UserCardDetail } from "./pages/UserCardDetail";
import { OfferedCard } from "./pages/OfferedCard";
import { MyCardDetail } from "./pages/MyCardDetail";


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
  {
    path: "/card/my",
    element: <MyCard />,
  },
  {
    path: "/card/my-detail",
    element: <MyCardDetail />,
  },
  {
    path: "/card/offered-list",
    element: <OfferedList />,
  },
  {
    path: "/card/user-detail",
    element: <UserCardDetail />,
  },
  {
    path: "/card/offered",
    element: <OfferedCard />,
  },
]);
