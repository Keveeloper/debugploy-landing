import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/google-sans-code/400.css'
import '@fontsource/google-sans-code/500.css'
import '@fontsource/google-sans-code/700.css'
import '@fontsource/google-sans-code/800.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
