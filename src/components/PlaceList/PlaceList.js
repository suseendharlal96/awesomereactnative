import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItem from "../Listitem/ListItem";

const placeList = (props) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeImage={info.item.image}
          placeName={info.item.name}
          selectPlace={() => props.selectPlace(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  },
});

export default placeList;
