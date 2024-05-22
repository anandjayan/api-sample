import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Tmdb from './components/Tmdb.jsx';
import Spotify from './components/Spotify.jsx';
import Newsboard from './components/News/Newsboard.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Newsboard />} />
      <Route path="/Spotify" element={<Spotify />} />
      <Route path="/Tmdb" element={<Tmdb />} />
      <Route path="/News" element={<Newsboard />} />
      
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);