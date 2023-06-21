/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { PersistGate } from 'redux-persist/integration/react'
import { name as appName } from "./app.json";
import { Provider as StoreProvider } from "react-redux";
import {store,persistor} from "./src/store/store"

const ReduxProvider = () => {
    return (
        <StoreProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
          <App />
          </PersistGate>
        </StoreProvider>
    );
  };
AppRegistry.registerComponent(appName, () => ReduxProvider);
