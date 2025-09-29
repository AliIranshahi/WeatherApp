import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthContext } from './context/AuthContext.tsx'
import { CookiesProvider } from 'react-cookie'
import './i18n.tsx'
import './i18nFast.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookiesProvider>
      <AuthContext>

        <App />

      </AuthContext>
    </CookiesProvider>
  </StrictMode>,
)
