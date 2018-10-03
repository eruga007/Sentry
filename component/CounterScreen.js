import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Sentry from "sentry-expo";

export default class CounterScreen extends React.Component {
  state = {
    number: 0
  };

  _add(amount) {
    const value = this.state.number
    console.log(this.state.number)
    if( value > 50 ){
        throw new Error('error > 50');
    }
    this.setState(({ number }) => ({
      number: number + amount
    }));
    
  }

  _add_10 = () => {
    Sentry.captureBreadcrumb({
      message: "ADD 10",
      category: "count",
      level: "info",
      data: {
        number: this.number
      }
    }),
      this._add(10);
  };
  _add_1 = () => {
    Sentry.captureBreadcrumb({
      message: "ADD 1",
      category: "count",
      level: "info",
      data: {
        number: this.number
      }
    }),
      this._add(1);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>CounterScreen</Text>
        <Text>{this.state.number}</Text>
        <Button title="+10" onPress={this._add_10} />
        <Button title="+1" onPress={this._add_1} />
      </View>
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
