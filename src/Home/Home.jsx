import React, { useEffect } from 'react'
import style from './Home.module.css'
import { Link, redirect, useNavigate, useLocation } from 'react-router-dom'
import { userInfo } from '../data.js'

import HomeBtn from './HomeBtn'
import HomeInput from './HomeInput'



export default function Home() {

    const location = useLocation();
    const navigate = useNavigate();

    const defender = () => {
        if (userInfo.gender === "" || userInfo.age === null || userInfo.group === "" || userInfo.name === "" || userInfo.surname === "") {
            let error = `Не заполнены данные поля: \n`;
            if (userInfo.gender === "") error += `Пол \n`;
            if (userInfo.age === null) error += `Возраст \n`;
            if (userInfo.group === "") error += `Номер группы \n`;
            if (userInfo.name === "") error += `Имя \n`;
            if (userInfo.surname === "") error += `Фамилия \n`;
            alert(error)

        } else {
            //console.log("else");
            navigate('/survey/1')
        }
    }

    return (
        <div className={style.container}>
            <h1 className={style.header}>Психо-тест</h1>
            <hr className={style.line} />
            <div className={style.textContainer}>
                <p>Автор: бла бла <br />Для того чтобы получить психологическую помощь,<br /> необходимо предварительно записаться на консультацию </p>
                {/* <p> какая нибудь инфа </p> */}
                <img className={style.img} src="/illustration.png" alt="Логотип психолога" />
            </div>
            <hr className={style.line} />
            <p>Отвечая на каждый вопрос, вы сможете выбрать один из трех предлагаемых ответов – тот, который в наибольшей степени соответствует вашим взглядам, вашему мнению о себе. <br /><br />
                Старайтесь не тратить много времени на обдумывание. Давайте первый ответ, который придет вам в голову.<br /><br />
                Старайтесь не увлекаться промежуточными, неопределенными ответами, за исключением случаев, когда вы действительно не можете выбрать ни один из крайних вариантов.<br /><br />
                Старайтесь отвечать как можно искренней. Не надо стараться произвести хорошее впечатление своими ответами, они должны соответствовать действительности.<br /><br />
                Опросник содержит несколько логических вопросов, в которых вы должны выбрать единственный правильный ответ.</p>
            <hr className={style.line} />
            <div className={style.inputContainer}>
                <div className={style.inputWrapper}>
                    <p>Пол:</p>
                    <HomeBtn text="Мужчина" color="#6EA7DCCF" type="gender" />
                    <HomeBtn text="Женщина" color="#E3A7E0" type="gender" />
                </div>
                <div className={style.inputWrapper}>
                    <HomeInput text="Введите свой возраст:" type="age" input="number" />
                    <HomeInput text="Ваш номер группы:" type="group" input="text" />
                </div>
                <div className={style.inputWrapper}>
                    <HomeInput text="Введите своё имя:" type="name" input="text" />
                    <HomeInput text="Введите свою фамилию:" type="surname" input="text" />
                </div>
            </div>
            <div onClick={defender} style={{ margin: "50px 0" }} >
                <HomeBtn text="Начать тестирование" color="#6EA7DCCF" link="/" />
            </div>
        </div>
    )
}