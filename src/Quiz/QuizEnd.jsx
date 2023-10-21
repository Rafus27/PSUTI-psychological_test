import React from 'react'
import { useState } from 'react'
import style from './Quiz.module.css'
import { userInfo, answers } from '../data.js'
import { Base64 } from 'js-base64'

export default function QuizItemEnd() {

    let header = "Тест завершен"


    let testData = {
        name: userInfo.name,
        surname: userInfo.surname,
        age: userInfo.age,
        gender: userInfo.gender,
        group: userInfo.group,
        results: {}
    }

    const factors = ["b", "c", "e", "g", "h", "i", "l", "n", "o", "q1", "q2", "q3", "q4",]

    const rightAnswers = ["", "b", "ab", "bc", "ab", "ab", "ab", "ab", "bc", "bc", "ab", "ab", "ab", "ab", "c", "ab", "bc", "bc", "bc", "ab", "bc", "ab", "ab", "ab", "bc", "ab", "bc", "b", "bc", "bc", "ab", "bc", "bc", "bc", "ab", "bc", "bc", "ab", "ab", "bc", "c", "ab", "ab", "bc", "ab", "ab", "bc", "ab", "ab", "bc", "ab", "bc", "ab", "a", "bc", "bc", "ab", "ab", "bc", "ab", "bc", "bc", "bc", "bc", "bc", "bc", "c", "bc", "ab", "bc", "bc", "bc", "ab", "ab", "ab", "ab", "bc", "bc", "ab", "b"]

    function resultSort(read, write, answers, right) {
        for (const i in read) write[read[i]] = 0;
        for (let i = 0; i < answers.length - 1; i++) {
            if (right[i + 1].includes(answers[i + 1])) {
                write[read[i % read.length]]++
            }
        }
    }

    let urlString = ""

    function urlGenerate(data, domain) {
        let answers = ""
        for (const i in data.results) answers += data.results[i]
        const strData = Base64.encode(`${data.name}+${data.surname}+${data.age}+${data.gender}+${data.group}+${answers}`)
        urlString = strData
        return `${domain}/results/data:${strData}`
    }

    resultSort(factors, testData.results, answers, rightAnswers)

    const url = urlGenerate(testData, window.location.origin)

    //console.log(testData)

    console.log(url);

    //console.log(Base64.decode(urlString));

    let response = new Promise((resolve, reject) => {
        fetch(`${window.location.origin}/send`, {
            method: "POST",
            headers: {
                'Content-Type': 'text/plain'
            },
            body: url
        })
        resolve("result")
        reject(err)
    })

    response.then(
        result => {
            header = "Тест завершен"
        }
        
    )


    return (
        <div className={style.quizItem}>
            <h1 className={style.endText}>{header}</h1>
        </div>
    )
}