import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import rootReducer from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const middleware = [ thunk ];
const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

render(
  <Provider store={store}>
      <MuiThemeProvider>
          <App />
      </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
