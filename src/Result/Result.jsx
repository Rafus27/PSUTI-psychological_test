import React from 'react'
import style from './Result.module.css'

import { Base64 } from 'js-base64'
// import CanvasJSReact from '@canvasjs/react-charts';

// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let testData = {}

function dataParse() {
    function urlToString() {
        return (Base64.decode(((window.location.href).match(/(?<=data:).*/gm)).toString())).split("+")
    }

    let urlData = urlToString()

    //console.log(urlData);

    function counter(num, index) {
        const sum = index === 0 ? 7 : 6
        return ((num / sum) * 10).toFixed(1)
    }

    testData = {
        name: urlData[0],
        surname: urlData[1],
        age: urlData[2],
        gender: urlData[3],
        group: urlData[4],
        results: urlData[5].split('').map((n, i) => Number(counter(n, i)))
    }
}

function Counter({ value }) {
    let v = value*10
    return (
        <div className={style.counter}>
            <div style={{marginLeft: `${v}%`}} className={style.counterValue}>
                <div className={style.counterImg}></div>
            </div>
        </div>
    )
}


function Charts(props) {
    /* const options = {
        interactivityEnabled: false,
        width: 400,
        height: 200,
        title: {
            //text: "Chart Title"
        },
        axisX: {
            labelAngle: -90,
            gridThickness: 1,
            tickThickness: 0,
            maximum: 12,
            minimum: 0,
            interval: 1,
            valueFormatString: " ",
            margin: 0,
            padding: 0,
            //valueFormatString: " ",


        },
        axisY: {
            labelAngle: -90,
            prefix: "  ",
            labelPlacement: "outside",
            labelWrap: false,
            margin: 0,
            padding: 0,
            maximum: 10,
            minimum: 0,
            interval: 1,
            labelTextAlign: "center",
            valueFormatString: " ",
            gridThickness: 1,
            lineThickness: 1,
            tickThickness: 0,
            //valueFormatString: " ",

        },
        data: [
            {
                type: "line",
                color: "red",
                z: 10,
                dataPoints: []
                //{ x: 1, y: 5.5, label: "" },
            }
        ]
    }; */

    //(props.data).map((v, i) => { options.data[0].dataPoints.push({ x: i, y: v, label: " " }) })

    //console.log(options.data[0].dataPoints);

    return (
        <div className={style.table}>
            <div className={style.count}>
                <p>0</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
            </div>
            <div className={style.chartContainerOuter}>

                {(props.data).map((v, i) => <Counter value={v} key={i} /> )}


                {/* <div className={style.chartContainer}>

                    <CanvasJSChart options={options} />
                    <div className={style.com}></div>
                </div> */}
            </div>

        </div>
    )

}

function PersonProfile(props) {

    const factors = ["b", "c", "e", "g", "h", "i", "l", "n", "o", "q1", "q2", "q3", "q4"]

    const cons = ["Низкий интеллект", "Эмоциональная неустойчивость", "Подчинённость", "Небрежность", "Робость", "Жесткость", "Доверчивость", "Прямолинейность", "Спокойствие", "Консерватизм", "Зависимость от группы", "Низкий самоконтроль", "Расслабленность"]

    const pros = ["Высокий интеллект", "Эмоциональная стабильность", "Властность", "Ответственность", "Смелость", "Мягкосердечие", "Подозрительность", "Дипломатичность", "Тревожность", "Гибкость", "Самостоятельность", "Высокий самоконтроль", "Напряженность"]

    function Cols(props) {
        return (
            <div className={style.personContainer} >
                <h3>{props.header}</h3>
                <div className={style.personCharactContainer}>{(props.array).map((f, i) => <div key={i} className={style.personCharact} ><p style={{ textAlign: props.align, width: '100%' }}>{f}</p></div>)}</div>
            </div>
        )
    }

    return (
        <div className={style.chartResult}>
            <Cols header="Факторы:" array={factors} align="center" />
            <Cols header="Значения:" array={testData.results} align="center" />
            <Cols header="-" array={cons} align="right" />
            <Charts data={testData.results} />
            <Cols header="+" array={pros} align="left" />
        </div>
    )
}

function Text(props) {

    const text = (props.text).split("\n").map((t, i) => <p key={i}>{t}</p>)

    return (
        <div>
            <h1>{props.header}</h1>
            {text}
            <hr />
        </div>
    )
}





export default function Result() {


    dataParse()

    //console.log(testData);
    return (
        <div className={style.result}>
            <h1>Психо-тест</h1>
            <hr />
            <Text header="Результат теста" text={`Результатом теста является профиль вашей личности, построенный по выявленным в ходе опроса шестнадцати факторам. \nФакторы измеряются в условных единицах – «стенах» – и распределяются по биполярной шкале с крайними значениями в 1 и 10 баллов. \nСоответственно, первой половине шкалы (от 1 до 5,5) присваивается знак «−», второй половине (от 5,5 до 10) знак «+». \nПри интерпретации следует уделять внимание, в первую очередь, «пикам» профиля, то есть наиболее низким и наиболее высоким значениям факторов в профиле, в особенности – тем показателям, которые в «отрицательном» полюсе находятся в границах от 1 до 3 стенов, а в «положительном» – от 8 до 10 стенов.`} />
            <div>
                <h1>Информация об учащемся:</h1>
                <UserData header="Имя" data={testData.name} />
                <UserData header="Фамилия" data={testData.surname} />
                <UserData header="Пол" data={testData.gender} />
                <UserData header="Возраст" data={testData.age} />
                <UserData header="Группа" data={testData.group} />
                <hr />
            </div>
            <h1>Профиль личности</h1>
            <PersonProfile />
            <Text header="Интерпретация первичных факторов" text={`Фактор A: «замкнутость – общительность» \n 4 стена – сдержанный, обособленный, критический, холодный (шизотимия).\n Для низкого значения характерно: скрытность, обособленность, отчужденность, недоверчивость, необщительность, замкнутость, критичность, склонность к объективности, ригидности, к излишней строгости в оценке людей. Трудности в установлении межличностных, непосредственных контактов\n Для высокого значения характерно: общительность, открытость, естественность, непринужденность, готовность к сотрудничеству, приспособляемость, внимание к людям, готовность к совместной работе, активность в устранении конфликтов в группе, готовность идти на поводу. Легкость в установлении непосредственных, межличностных контактов\n \n Фактор B: интеллект\n 1-3 стена – склонен медленнее понимать материал при обучении. «Туповат», предпочитает конкретную, буквальную интерпретацию. Его «тупость» или отражает низкий интеллект, или является следствием снижения функций в результате психопатологии.\n Для низкого значения характерно: конкретность и некоторая ригидность мышления, затруднения в решении абстрактных задач, сниженная оперативность мышления, недостаточный уровень общей вербальной культуры.\n Для высокого значения характерно: развитое абстрактное мышление, оперативность, сообразительность, быстрая обучаемость. Достаточно высокий уровень общей культуры, особенно вербальной.`} />
            <Text header="Интерпретация вторичных факторов" text={`Фактор F1: «низкая тревожность – высокая тревожность» \n5-6 стенов – среднее значение\nДля низкого значения характерно: в общем этот человек удовлетворен тем, что есть, и может добиться того, что ему кажется важным. Однако очень низкие баллы могут означать недостаток мотивации в трудных ситуациях.\nДля высокого значения характерно: высокий уровень тревоги в ее обычном понимании. Тревога не обязательно невротическая, поскольку она может быть обусловлена ситуационно. Однако в чем-то имеет неприспособленность, т. к. человек недоволен в степени, которая не позволяет ему выполнять требования и достигать того, что желает. Очень высокая тревога обычно нарушает продуктивность и приводит к соматическим расстройствам.\n\nФактор F2: «интроверсия – экстраверсия»\n7 стенов – значение выше среднего\nДля низкого значения характерно: склонность к сухости, к самоудовлетворению, замороженности межличностных контактов. Это может быть благоприятно в работе, требующей точности.\nДля высокого значения характерно: социально контактен, незаторможен, успешно устанавливает и поддерживает межличностные связи. Это может быть очень благоприятным моментом в ситуациях, требующих темперамента такого типа. Эту черту следует считать всегда благоприятным прогнозом в деятельности, например в учебе.`} />
            <Text header="Контрольные шкалы" text={`В дополнение к первичным личностным факторам опросника обычно подсчитываются два показателя, отражающие отношение к тестированию (шкалы валидности):\n1) стремление выглядеть в благоприятном свете – шкала MD,\n2) стремление выглядеть хуже, чем на самом деле – шкала FB. (только для форм A/B)\n\nШкала MD была разработана для выявления тех случаев, когда испытуемые пытаются создать слишком благоприятное представление о себе. Если оценка по шкале MD высокая, возникает несколько гипотез, которые нужно проверить:\n1. Это может свидетельствовать о том, что испытуемый сознательно манипулирует тестовыми результатами (например, при приеме на работу).\n2. Высокую оценку по шкале MD могут получить обследуемые, которых очень беспокоит вопрос о том, как они выглядят в глазах окружающих. В интервью они обычно признают этот факт, но при этом утверждают, что на вопросы отвечали искренне.\n3. Иногда люди получают высокую оценку по шкале MD, хотя они и не искажают результаты. Например, это характерно для людей, поступающих на религиозную службу.`} />
            <Text header="Интерпретация парных сочетаний первичных факторов" text={`При интерпретации полученных результатов целесообразно использовать не только выраженность отдельных факторов, но и их сочетаний, образующих симптомокомплексы коммуникативных, интеллектуальных, эмоциональных и регуляторных личностных свойств. При этом следует учитывать не только полюсные значения факторов, но и средние, которые довольно часто встречаются в практике работы психолога.\n\nГруппу коммуникативных свойств образуют следующие факторы: A, H, E, L, N, Q2.\nСочетание факторов A и H отражает потребность личности в общении, умении общаться.`} />
        </div>
    )
}

function UserData(props) {
    return (
        <div>
            <h2>{props.header}:</h2>
            <p>{props.data}</p>
        </div>
    )
}