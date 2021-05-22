import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Container } from 'react-bootstrap';
import { createStore, compose } from 'redux'
import reducers from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux'



// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// To debug
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(middleware))

ReactDOM.render(
  <Provider store={store}>
    <Container className="pt-5">
      <App />
    </Container>
  </Provider>
  ,

  document.getElementById('root')
);

