import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";
import Body from "./Body";
import About from "./About";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./Contact";
import Error from "./Error";
import RestauarantMenu from "./RestaurantMenu";
import Login from "./Login";

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path:'/',
        element: <Body/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/restaurants/:resId',
        element: <RestauarantMenu/>
      },
      {
        path:'/login',
        element: <Login/>
      }
    ],
    errorElement: <Error/>
  },
  

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
