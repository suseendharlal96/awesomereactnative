import React from "react";
import { registerRootComponent } from "expo";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import placesReducer from "./src/store/reducers/places";

const store = createStore(placesReducer);

const StoreRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
// AppRegistry.registerComponent("main", () => StoreRedux);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(StoreRedux);
