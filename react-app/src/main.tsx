import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' --> we are deleting this file
import "bootstrap/dist/css/bootstrap.css" // Add bootstrap - we see that our page changes
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
