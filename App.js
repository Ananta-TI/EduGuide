import "react-native-gesture-handler";
import "./global.css";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { PaperProvider, MD3LightTheme } from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator";

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#5B7CFA",
    secondary: "#8EA2FF",
    background: "#EEF0FF",
    surface: "#FFFFFF",
    outline: "#E5E7F5",
  },
  roundness: 24,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="dark" />
      <AppNavigator />
    </PaperProvider>
  );
}