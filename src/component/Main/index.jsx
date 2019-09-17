import React from 'react'
import Section from '@component/Section'
import style from './style.css'

export const Main = ({ sections = [], title }) => (
    <main>
        {title && <h1 className={style.title}>{title}</h1>}
        {sections.map(({ component: Component, ...rest }, index) =>
            Component ? <Component {...rest} key={`${index}`} /> : <Section {...rest} key={`${index}`} />
        )}
    </main>
)

export default Main
