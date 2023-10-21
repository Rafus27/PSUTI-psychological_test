import React from 'react'
import style from './Quiz.module.css'
import { Link } from 'react-router-dom'
import { userInfo, answers } from '../data.js'

function Answer(props) {

    const setAnswer = () => answers[props.id] = props.sign

    return (
        <Link to={"/survey/" + (Number(props.id) + 1)} onClick={setAnswer}>
            <label className={style.answer} htmlFor={props.id + props.sign}>
                <input className={style.input} type="radio" name={props.id} id={props.id + props.sign} />
                <p className={style.answerText}>{props.answer}</p>
            </label>
        </Link>
    )
}

export default function QuizItem(props) {
    return (
        <div className={style.quizItem}>
            <p className={style.question}>{props.question}</p>
            <div>
                <Answer sign="a" answer={props.answers.a} id={props.id} />
                <Answer sign="b" answer={props.answers.b} id={props.id} />
                <Answer sign="c" answer={props.answers.c} id={props.id} />
            </div>
        </div>
    )
}