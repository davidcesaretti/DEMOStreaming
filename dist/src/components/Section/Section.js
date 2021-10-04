import React from 'react'
import style from './section.module.css'
import {Link} from 'react-router-dom'

export function Section ({children}) {

    return (
        <div className={style.ctn}>
                <Link to={`/${children}`} className={style.img}>
                    <p className={style.section}>{children}</p>
                </Link>
                <p className={style.title}>Popular {children}</p>
        </div>
    )
}