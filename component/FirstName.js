import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import CounterScreen from "./CounterScreen";
import Sentry from "sentry-expo";
import SentryBoundary from "./SentryBoundary";

Sentry.enableInExpoDevelopment = true;
Sentry.config(
  "https://f498a87c5eb8478f8e8f3c8b3e70196b@sentry.io/1293553"
).install();
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Counter: {
      screen: CounterScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);
export default class FirstName extends React.Component {
  render() {
    return (
      <SentryBoundary>
        <RootStack />
      </SentryBoundary>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
