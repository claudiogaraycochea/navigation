// ./App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./screens/navigation/DrawerNavigator";

 const Dashboard = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default Dashboard;