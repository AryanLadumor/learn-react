import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
//importing a tools from reat-router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="app">
      
      <Header />
    {/* //! part-4.2 */}
      {/*   if path = /         then => <Body/>      */}
      {/*   if path = /contact  then =><ContactUs/>  */}
      {/*   if path = /about    then=><AboutUs/>     */}
      {/*
       For those condition based routing react give us Outlet.
       this outlet component is gonna be replaced/filled by the component connected  to the path in cofiguration
      <Body/>
      <ContactUs/>
      <AboutUs/> 
      */}
      <Outlet />
      
    </div>
  );
};

//! part -3 creating Routes
//? for routing we should create brower config
//? config==> info about  what will happen on specific route
// const appRouter =createBrowserRouter([
//   {
//     //Here what happen in this path should be defined in element mean what eleent or componrt or page will be shown
//     path: "/",
//     element : <AppLayout/>,
//     //what if we visit any random routes then an default 404 page will be throw with handled expection which is provided by reactrouter
//     //so lets create our own 404 page
//     //and we should pass thgis
//     errorElement : <Error/>
//   },
//   {
//     //Here what happen in this path should be defined
//     path : "/About",
//     element : <AboutUs/>, // so first let us creat about component then we define it
//     //Now when you hit about it will display about component
//     errorElement : <Error/>
//   },
//   {
//     path : "/contact",
//     element : <ContactUs/>
//   }
// ]) // this is the configuration needed to make routes but we have pass it on render so for that we will use Router Provider

//! part - 4.1 Creating Children route
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
// this  is how we should pass configurarions
root.render(<RouterProvider router={appRouter} />);
