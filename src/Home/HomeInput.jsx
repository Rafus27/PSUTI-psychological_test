import React, {useState} from 'react'
import style from './Home.module.css'
import {userInfo} from '../data.js'

export default function HomeInput(props) {

    const [value, setValue] = useState("");

    const setStateValue = event => {
        setValue(event.target.value);
        userInfo[props.type] = (event.target.value)
    }

    return(
        <div className={style.inputWrapper}>
            <p >{props.text}</p>
            <input className={style.input} type={props.input} onChange={setStateValue} />
        </div>
    )
}