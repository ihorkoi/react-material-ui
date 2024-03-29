import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { store } from './components/redux/store'
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).
  render(
    <Provider store={store}>
      <BrowserRouter basename='/react-material-ui'>
        <App />
      </BrowserRouter>
    </Provider>
  )
