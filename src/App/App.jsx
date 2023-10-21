import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import style from './App.module.css'

import Home from '../Home/Home.jsx'
import Quiz from '../Quiz/Quiz'
import Result from '../Result/Result'

export default function App() {
    return (
        <Router>
            <div className={style.content}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/survey/*" element={<Quiz />} />
                    <Route  path="/results/*" element={<Result />} />
                </Routes>
            </div>
        </Router>
    )
}