import React from 'react'
import { Section } from '@component'
import style from './style.css'

export const Main = ({ sections = [], title }) => (
    <main>
        {title && <h1 className={style.title}>{title}</h1>}
        {sections
            .map((item, index) => ({ ...item, key: index + item.title }))
            .map(({ component: Component, ...rest }) => Component
                ? <Component {...rest} />
                : <Section {...rest} />
            )}
    </main>
)

export default Main
