import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

document.documentElement.classList.remove('no-js')
const container = document.getElementById('root')!
const application = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

if (container.dataset.prerendered === 'agenda' && container.hasChildNodes()) {
  hydrateRoot(container, application)
} else {
  createRoot(container).render(application)
}
