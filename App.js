// ./App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./src/screens/navigation/DrawerNavigator";
import MainStackNavigatorPublic from "./src/screens/navigation/StackNavigatorPublic";
const App = () => {
  const logged = true;
  return (
    <NavigationContainer>
      {logged ? (<DrawerNavigator />):(<MainStackNavigatorPublic />)}
    </NavigationContainer>
  );
}
export default App;