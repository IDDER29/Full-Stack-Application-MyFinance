import React from "react";
import { DashboardProvider } from "./DashboardContext";
import { HomeProvider } from "./HomeContext";

const CombinedProvider = ({ children }) => (
  <DashboardProvider>
    <HomeProvider>{children}</HomeProvider>
  </DashboardProvider>
);

export default CombinedProvider;
