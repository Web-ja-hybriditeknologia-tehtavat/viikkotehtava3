import React from "react";
import { Appbar } from "react-native-paper";

const AppBar = ({ navigation, back }) => {
  return (
    <Appbar.Header>
        
      {back ? (
        <>
          <Appbar.BackAction onPress={navigation.goBack} />
          <Appbar.Content title="MD Nav demo" />
        </>
      ) : (
        <>
            <Appbar.Content title="MD Nav demo" />
            <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate("Second")} />
        </>
      )}
    </Appbar.Header>
  );
};

export default AppBar;