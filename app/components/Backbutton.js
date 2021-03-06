import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
function Backbutton({ goBack }) {
  return (
    <TouchableOpacity style={styles.container} onPress={goBack}>
      <Image
        style={styles.image}
        source={require("../assets/arrow_back.png")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10 + getStatusBarHeight(),
    left: 10,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default Backbutton;
