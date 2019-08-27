import React from 'react'
import Section from '@component/Section'
import style from './style.css'

export const InfoPage = ({ match }) => {
    let target

    if (!match.params.id || match.params.id === ':id') {
        target = 'brothers'
    } else {
        target = match.params.id
    }

    return (
        <Section className={style.container}>
            <h1>Hello, {target}!</h1>
            <p>Hello to everyone!</p>
        </Section>
    )
}

export default InfoPage
