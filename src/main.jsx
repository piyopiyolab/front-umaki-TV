import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./Components/App/App"
import './styles/index.scss'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <App />
  </Provider>


)
