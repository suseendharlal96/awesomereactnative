import * as actionType from "./actiontypes";

export const addPlace = (placeName) => {
  return {
    type: actionType.ADD_PLACE,
    placeName: placeName,
  };
};
export const removePlace = (placeName) => {
  return {
    type: actionType.DELETE_PLACE,
    placeName: placeName,
  };
};
export const selectPlace = (key) => {
  return {
    type: actionType.SELECT_PLACE,
    key: key,
  };
};
export const deselectPlace = () => {
  return {
    type: actionType.DESELECT_PLACE,
  };
};
