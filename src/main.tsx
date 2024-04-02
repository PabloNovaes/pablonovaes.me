import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.tsx'
import "./globals.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
)
