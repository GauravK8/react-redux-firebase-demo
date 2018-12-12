import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {UserContainer} from './containers/user.container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from "./store";

const store = configureStore()

render(
  <Provider store={store}>
    <UserContainer/>
  </Provider>,
  document.getElementById('root')
)
