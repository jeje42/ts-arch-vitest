import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

export const cyclicFunction = () => console.log("Hello there !")

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
