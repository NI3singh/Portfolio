import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Your main App component
import './index.css' // Global styles, including Tailwind

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)