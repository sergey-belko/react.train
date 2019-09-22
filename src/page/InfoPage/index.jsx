import { Section } from '@component'
import { inject } from "@store"
import React from 'react'
import style from './style.css'

export const InfoPage = inject('User')(({ match, ...props }) => {
    let target

    if (!match.params.id || match.params.id === ':id') {
        target = 'brothers'
    } else {
        target = match.params.id
    }

    return (
        <Section className={style.container}>
            <h1>
                Hello, {target} and {props.User.name}!
            </h1>
            <p>Hello to everyone!</p>
        </Section>
    )
})

export default InfoPage
