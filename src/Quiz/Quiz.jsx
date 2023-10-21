import React from 'react'
import style from './Quiz.module.css'
import {
    Routes,
    Route,
    Link
} from 'react-router-dom'
import { userInfo, answers, data } from '../data.js'

import QuizItem from './QuizItem'
import QuizEnd from './QuizEnd'



export default function Quiz() {

    const listItems = data.map((item) =>
        <Route exact path={"/" + item.id} key={item.id} element={<QuizItem id={item.id} key={item.id} question={item.question} answers={item.answers} />} />
    )

    return (
        <div className={style.quiz}>
            <Routes>
                {listItems}
                <Route exact path="/80" element={<QuizEnd />} />
            </Routes>
        </div>
    )

}