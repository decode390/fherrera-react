import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
import { appRouter } from './app-router';

/* import "./08-useReducer/intro-reducer"; */

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={appRouter}/>
  // </React.StrictMode>,
)
