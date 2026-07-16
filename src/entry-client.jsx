import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App.jsx'

// Le HTML est pré-rendu au build (voir prerender.js) : on hydrate le markup
// existant au lieu de le recréer, afin de préserver le contenu visible sans JS.
hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <App />
  </StrictMode>,
)
