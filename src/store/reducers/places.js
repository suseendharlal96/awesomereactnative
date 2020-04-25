import { useState } from "react";

import * as actionType from "../actions/actiontypes";

const initState = {
  myplaces: [],
  selectedPlace: null,
};

const placesReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_PLACE:
      const a = state.myplaces.concat({
        key: Math.random().toString(),
        name: action.placeName,
      });
      return {
        ...state,
        myplaces: a,
      };
    case actionType.DELETE_PLACE:
      const b = state.myplaces.filter((data) => data.name !== action.placeName);
      return {
        ...state,
        myplaces: b,
        selectedPlace: null,
      };
    case actionType.SELECT_PLACE:
      const c = state.myplaces.find((data) => data.key === action.key);
      console.log(c);
      return {
        ...state,
        selectedPlace: c,
      };
    case actionType.DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null,
      };
    default:
      return state;
  }
};

export default placesReducer;
