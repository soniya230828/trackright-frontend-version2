import React from 'react';
import Home from "./containers/home";
import Tracks from "./containers/tracks";
import Dashboard from "./containers/dashboard"
import CustomDashboard from "./containers/customDashboard"
import Reports from "./containers/reports"
import Operations from "./containers/operations";

const RoutesPath = [
  {
    path: '/home',
    title: 'Home',
    content: () => <Home />,
  },
  {
    path: '/tracks',
    title: 'Tracks',
    content: () => <Tracks />,
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    content: () => <Dashboard />,
  },
  {
    path: '/customDashboard',
    title: 'CustomDashboard',
    content: () => <CustomDashboard />,
  },
  {
    path: '/reports',
    title: 'Reports',
    content: () => <Reports />,
  },
  {
    path: '/operations',
    title: 'Operations',
    content: () => <Operations />,
  },
  {
    path: '/operations/consignment',
    title: 'Consignment',
    content: () => <Operations />,
  },
  {
    path: '/operations/trip list',
    title: 'Trip List',
    content: () => <Operations />,
  },
  {
    path: '/operations/fuel entry',
    title: 'Fuel Entry',
    content: () => <Operations />,
  },
];

export default RoutesPath;
