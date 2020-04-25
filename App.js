import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import * as actions from "./src/store/actions/index";

class App extends Component {
  componentDidMount() {
    console.log(this.props.selectedPlace);
  }
  // const [myplaces, setPlaces] = useState([]);
  // const [selectedPlace, setSelectedPlace] = useState(null);

  placeAddedHandler = (value) => {
    console.log(value);
    this.props.addPlace(value);
  };

  selectPlaceHandler = (val) => {
    this.props.selectPlace(val);
    // console.log('selectedPlace',selectedPlace);
  };

  delHandler = (placeName) => {
    this.props.delPlace(placeName);
  };

  cancelHandler = () => {
    console.log("cancel");
    this.props.closeModel();
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          placeName={this.props.selectedPlace}
          del={this.delHandler}
          modelClose={this.cancelHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          selectPlace={this.selectPlaceHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

const mapStateToProps = (state) => {
  return {
    places: state.myplaces,
    selectedPlace: state.selectedPlace,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPlace: (value) => dispatch(actions.addPlace(value)),
    delPlace: (value) => dispatch(actions.removePlace(value)),
    selectPlace: (value) => dispatch(actions.selectPlace(value)),
    closeModel: () => dispatch(actions.deselectPlace()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
