import React from "react";
import { View, Modal, Button, Text, StyleSheet } from "react-native";

const placeDetail = (props) => {
  let modelContent = null;
  if (props.placeName) {
    console.log('detail',props.placeName);
    modelContent = (
      <View>
        {/* <Image source={props.placeImage} /> */}
        <Text>{props.placeName.name}</Text>
      </View>
    );
  }
  return (
    <Modal onRequestClose={props.modelClose} visible={props.placeName !== null}>
      <View style={styles.modelContainer}>{modelContent}</View>
      <View>
        <Button title="Delete" color="red" onPress={() => props.del(props.placeName.name)} />
        <Button title="Cancel" onPress={props.modelClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modelContainer: {
    margin: 22,
  },
});

export default placeDetail;
