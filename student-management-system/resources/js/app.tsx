import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main'
import '../css/tailwind.css'

function App() {
  return(
    <Main/>
  )
}

createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
