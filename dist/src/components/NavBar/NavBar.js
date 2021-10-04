import React from 'react'
import {Link} from 'react-router-dom'
import style from './navbar.module.css'

export function NavBar () {
    return (
        <div className={style.ctn}>
            <div className={style.center}>
                <h1 className={style.title}><Link to="/" className={style.link}>DEMO Streaming</Link></h1>
                <div className={style.buttons}>
                    <button className={style.button1}>Log in</button>
                    <button className={style.button2}>Start your free trial</button>
                </div>
            </div>
        </div>
    )
}