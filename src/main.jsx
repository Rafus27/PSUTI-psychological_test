import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import Header from './Header/Header'
import App from './App/App'

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <Header />
        <App />
    </div>
)
