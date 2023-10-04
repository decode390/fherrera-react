import './styles.css'
import 'animate.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { appRouter } from './router'
import { HeroesApp } from './HeroesApp';


const router = createBrowserRouter(appRouter);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroesApp>
        <RouterProvider router={router}></RouterProvider>
    </HeroesApp>
  </React.StrictMode>,
)
