import React from 'react'
import style from './Home.module.css'
import {userInfo} from '../data.js'

export default function HomeBtn(props) {

    if (props.type) {
        const setValue = () => {userInfo[props.type] = props.text}
        return <button className={style.btn} style={{backgroundColor: props.color}} onClick={setValue}>{props.text}</button>
    } else {
        return <button className={style.btn}>{props.text}</button>
    }
    
}