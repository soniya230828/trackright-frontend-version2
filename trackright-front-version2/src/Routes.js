import React from "react";
import Home from "./containers/home";
import Tracks from "./containers/tracks";
import Dashboard from "./containers/dashboard";
import CustomDashboard from "./containers/customDashboard";
import Reports from "./containers/reports";
import Operations from "./containers/operations";
import Consignment from "./containers/consignment/index";
import TripList from "./containers/triplist/tripList";
import FuelEntry from "./containers/fuelentry/fuelpage";

const RoutesPath = [
  {
    path: "/home",
    title: "Home",
    content: () => <Home />,
  },
  {
    path: "/tracks",
    title: "Tracks",
    content: () => <Tracks />,
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    content: () => <Dashboard />,
  },
  {
    path: "/customDashboard",
    title: "CustomDashboard",
    content: () => <CustomDashboard />,
  },
  {
    path: "/reports",
    title: "Reports",
    content: () => <Reports />,
  },
  {
    path: "/operations",
    title: "Operations",
    content: () => <Operations />,
  },
  {
    path: "/operations/consignment",
    title: "Consignment",
    content: () => <Consignment />,
  },
  {
    path: "/operations/trip list",
    title: "TripList",
    content: () => <TripList />,
  },
  {
    path: "/operations/fuel entry",
    title: "Fuel Entry",
    content: () => <FuelEntry />,
  },


];

export default RoutesPath;
