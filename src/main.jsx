import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { FmaApp } from './FmaApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <BrowserRouter>
        <FmaApp />
      </BrowserRouter>
  // </React.StrictMode>
)
 