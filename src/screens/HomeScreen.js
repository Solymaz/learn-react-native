import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <Button title="List" onPress={() => navigation.navigate("List")} />
      <Button
        title="Component"
        onPress={() => navigation.navigate("Components")}
      />
      <Button title="Image" onPress={() => navigation.navigate("Image")} />
      <Button title="Counter" onPress={() => navigation.navigate("Counter")} />
      <Button
        title="Color Screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Square screen"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Square screen 2"
        onPress={() => navigation.navigate("Square2")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;