import { Section } from '@component'
import { inject } from "@store"
import React from 'react'

export const MobxPage = inject('User')((props) => (
    <Section>
        <h1>Hello, {props.User.name}!</h1>
        <button onClick={props.User.updateName}>Update name</button>
    </Section>
))

export default MobxPage
