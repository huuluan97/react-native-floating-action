import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

function AddIcon(props) {
  const { width, height, backgroundColor } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.vertical, { height, backgroundColor }]} />
      <View style={[styles.horizontal, { width, backgroundColor }]} />
    </View>
  )
}

AddIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  vertical: {
    width: 2,
    position: "absolute"
  },
  horizontal: {
    height: 2,
    position: "absolute"
  }
});

export default AddIcon;
