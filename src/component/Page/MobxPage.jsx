import React from 'react'
import { observer } from 'mobx-react'
import Section from '@component/Section'

export const MobxPage = observer(({ store }) => (
    <Section>
        <h1>Hello, {store.name}!</h1>
        <button onClick={store.updateName}>Update name</button>
    </Section>
))

export default MobxPage
