import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';

import { App } from './App';

// importation of Provider for binding 
import { Provider } from "react-redux";

// importation of configStore from the store folder indexedDB.js file 
import { configStore } from "./stores";
 
// configstore 
const stores = configStore(); 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    <Provider store = { stores }>

      <App />
      
    </Provider>
  
  </React.StrictMode>

);

