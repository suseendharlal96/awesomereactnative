import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const placeInput = (props) => {
  const [placeName, setPlaceName] = useState("");

  const placeNameChangedHandler = (val) => {
    setPlaceName(val);
  };

  const placeSubmitHandler = () => {
    props.onPlaceAdded(placeName);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="An awesome place"
        value={placeName}
        onChangeText={placeNameChangedHandler}
        style={styles.placeInput}
      />
      <Button
        title="Add"
        style={styles.placeButton}
        onPress={placeSubmitHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeInput: {
    width: "70%",
  },
  placeButton: {
    width: "30%",
  },
});

export default placeInput;
