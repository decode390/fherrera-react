import React from 'react';
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './index.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={12}/> 
    {/* <FirstApp title='Hello world'/> */}
  </React.StrictMode>
);

