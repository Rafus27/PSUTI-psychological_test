import React from 'react'
import style from './Header.module.css'

export default function Header() {

    const log = () => console.log(userInfo);

    return (
        <div className={style.header} >
            <div className={style.headerContainer}>
                <a href="/#"><img src="/logo.png" alt="ПГУТИ" className={style.logo} /></a>
                <a href="/#"><img src="/logo-it.png" alt="it-club" className={style.logoIt} /></a>
            </div>
        </div>
    )
}