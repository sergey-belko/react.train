import React from 'react'
import style from './style.css'

const Section = ({ anchor, title, content, children }) => (
    <section className={style.container}>
        <a name={anchor}></a>
        <h2 className={style.title}>{title}</h2>
        <p className={style.content}>{content}</p>
        {children}
    </section>
)

export default Section
