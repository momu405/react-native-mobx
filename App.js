import React, {Component} from 'react';
import AppNavigatorProvider from './src/core/AppNavigatorProvider';
import { Provider } from "mobx-react";

import stores from "./src/stores";

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <AppNavigatorProvider />
      </Provider>
    );
  }
}