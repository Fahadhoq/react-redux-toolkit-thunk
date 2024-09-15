import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import counterStore from './service/store/counterStore';
import todosStore from './service/store/todosStore';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* redux */}
    {/* <Provider store={counterStore}>
      <App />
      
    </Provider> */}
    {/* <Provider store={todosStore}>
      <App />
    </Provider> */}

    {/* toolkit */}
    {/* <Provider store={store}>
      <App />
    </Provider> */}

    {/* project */}
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
