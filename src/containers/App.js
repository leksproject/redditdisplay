import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {ConfigureStore} from '../configureStore'
import SubredditApp from './SubredditApp'

const store = ConfigureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
        <SubredditApp/>
        </div>
      </Provider>
    )
  }
}