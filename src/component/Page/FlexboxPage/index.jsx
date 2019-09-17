import React from 'react'
import { Section, FlexContainer, Main } from '@component'
import style from './style.css'

const Elements = ({ className }) => (
    <div className={className}>
        {[...new Array(4).keys()].map((item, index) => (
            <div className={style.element} key={index}>
                {item}
            </div>
        ))}
    </div>
)

const FlexSection = ({ children, title }) => (
    <Section title={title}>
        <FlexContainer>{children}</FlexContainer>
        <Elements />
    </Section>
)
const content = ''

const sections = [
    { anchor: 'main', title: 'Main', content },
    { anchor: 'project', title: 'Project', content },
    { anchor: 'about', title: 'About', content },
    { anchor: 'gallery', title: 'Gallery', component: FlexSection, content }
]

export const FlexboxPage = () => <Main title="Flexbox Page" sections={sections} />

export default FlexboxPage
