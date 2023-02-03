import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App initial={1} time={1000} increment={1}/>
 
);

