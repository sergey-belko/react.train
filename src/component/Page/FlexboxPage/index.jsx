import React from 'react'
import { Header, Section, FlexContainer, Main, ReturnBtn } from '@component'
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
    { title: 'Main' },
    { title: 'Project' },
    { title: 'About' },
    { title: 'Gallery', component: FlexSection }
].map((item) => ({ ...item, content, anchor: item.title.toLowerCase() }))

export const FlexboxPage = () => (
    <>
        <Header elements={sections} />
        <Main title="Flexbox" sections={sections} />
        <ReturnBtn />
    </>
)
export default FlexboxPage
