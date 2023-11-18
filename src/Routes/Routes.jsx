import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from "../pages/Home/Home";

import Main from "../layout/Main"
import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";


 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children : [
          {
            path: '/',
            element: <Home/>
          },
          {
            path: '/menu',
            element: <Menu/>
          },
          {
            path: 'ourShop/:category',
            element: <OurShop/>
          }, 
          {
            path: '/login',
            element: <Login/>
          }
        ]
    }
  ]) 