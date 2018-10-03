import React from "react";
import { StyleSheet, Text, View , Button} from "react-native";
import { createStackNavigator } from "react-navigation";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button title='GO Counter Screen' onPress={() => this.props.navigation.navigate("Counter")}></Button>
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
