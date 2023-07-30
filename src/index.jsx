import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  FirebaseContext  from './context/firebase.js'
import {firebase} from './lib/firebase.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <FirebaseContext.Provider value={firebase}>
        <App />
    </FirebaseContext.Provider>
)
