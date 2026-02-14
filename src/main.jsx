import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ui/ErrorFallback.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>window.location.replace("/")}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
