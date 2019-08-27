import React from 'react'
import classnames from 'classnames'
import style from './style.css'

const Section = ({ anchor, title, content, children, className }) => (
    <section className={classnames(style.container, className)}>
        <a name={anchor}></a>
        {title && <h2 className={style.title}>{title}</h2>}
        {content && <p className={style.content}>{content}</p>}
        {children}
    </section>
)

export default Section
