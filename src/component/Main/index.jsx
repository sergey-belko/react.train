import React from 'react'
import Section from '@component/Section'
import style from './style.css'

export const Main = ({ sections = [], title }) => {
    console.log({ sections })
    return (
        <main>
            {title && <h1 className={style.title}>{title}</h1>}
            {sections.map(({ component: Component, ...rest }, index) => {
                return Component ? (
                    <Component {...rest} key={`${index + rest.title}`} />
                ) : (
                        <Section {...rest} key={`${index + rest.title}`} />
                    )
            })}
        </main>
    )
}

export default Main
