import React from 'react'
import Section from '@component/Section'
import style from './style.css'

const CustomComponent = ({ test, titleStyle }) => (
    <React.Fragment>
        <div className={titleStyle}>{test}</div>
        <div>Hello, Andrey!</div>
    </React.Fragment>
)

const Main = ({ sections = [] }) => (
    <main>
        <h1 className={style.title}>Pineapples!</h1>
        <CustomComponent titleStyle={style.title} test="AAA" />
        {sections.map(({ component: Component, ...rest }, index) =>
            Component ? <Component {...rest} key={`${index}`} /> : <Section {...rest} key={`${index}`} />
        )}
    </main>
)

export default Main
