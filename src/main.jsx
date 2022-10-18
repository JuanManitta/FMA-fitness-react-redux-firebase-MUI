import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { FmaApp } from './FmaApp'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <Provider store={ store }>
        <BrowserRouter>
          <FmaApp  />
        </BrowserRouter>
      </Provider>
  // </React.StrictMode>
)
  