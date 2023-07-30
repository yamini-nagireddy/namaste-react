import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";
import Body from "./Body";
import About from "./About";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./Contact";
import Error from "./Error";
import RestauarantMenu from "./RestaurantMenu";
import Login from "./Login";
// import Grocery from "./Grocery";

const Grocery = lazy(()=>import('./Grocery'));

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
      },
      {
        path:'/grocery',
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
    ],
    errorElement: <Error/>
  },
  

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
