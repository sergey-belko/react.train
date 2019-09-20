import React from 'react'
import { Section } from '@component'

export const MobxPage = ({ store }) => (
    <Section>
        <h1>Hello, {store.name}!</h1>
        <button onClick={store.updateName}>Update name</button>
    </Section>
)

export default MobxPage
