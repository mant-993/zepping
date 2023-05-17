import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from "react-redux"
import Reducer from './store/Reducer'

// creazione del local storage accessibile da tutti i componenti
const store = createStore(Reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

