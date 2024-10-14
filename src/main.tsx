import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/nav.tsx'
import React from 'react'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
  </StrictMode>,
)
