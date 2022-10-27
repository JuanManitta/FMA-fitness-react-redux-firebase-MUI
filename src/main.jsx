import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { FmaApp } from './FmaApp'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <Provider store={ store }>
        <ToastContainer
            theme="dark"
            position="top-right"
            autoClose={1000}
            closeOnClick
            pauseOnHover={false} />
        <BrowserRouter>
          <FmaApp  />
        </BrowserRouter>
      </Provider>
  // </React.StrictMode>
)
  