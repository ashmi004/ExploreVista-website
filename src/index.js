import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import Holidaypage from "./pages/Holidaypage";
import Activitiespage from "./pages/activitiespage";
import Hotelspage from "./pages/hotelspage";
import Flightspage from "./pages/flightspage";


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
        path: "/Holiday",
        element: <Holidaypage/>,
    },
    {
      path: "/Activities",
      element: <Activitiespage/>,
  },
  {
    path: "/Hotels",
    element: <Hotelspage/>,
},
{
  path: "/Flights",
  element: <Flightspage/>,
},
  ]);

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<RouterProvider router={router}/>);
