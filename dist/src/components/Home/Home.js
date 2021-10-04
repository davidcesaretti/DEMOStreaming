import React from 'react'
import { Section } from '../Section/Section'
import style from './home.module.css';

export function Home () {
    return (
        <div className={style.content}>
            <div className={style.ctnTitle}>
                <div>
                    <h1 className={style.title}>Popular Titles</h1>
                </div>
            </div>
            <div className={style.ctn}>
                <div className={style.sectionCtn}>
                    <Section>Series</Section>
                    <Section>Movies</Section>
                </div>
            </div>
        </div>
    )
}