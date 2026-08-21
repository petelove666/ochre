import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './theme/brand2/light.css'
import './theme/brand2/dark.css'
import './theme/tokens/light.css'
import './theme/tokens/dark.css'
import './theme/tokens/global.css'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
