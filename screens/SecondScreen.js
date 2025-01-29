import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(16, 85, 154, 0.65)',
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SecondScreen;