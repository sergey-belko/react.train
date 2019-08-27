import React from 'react'
import Footer from '@component/Footer'
import Header from '@component/Header'
import Main from '@component/Main'
import Gallery from '@component/Gallery'
import Section from '@component/Section'

import style from './style.css'

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.`

const sections = [
    { anchor: 'main', title: 'Main', content },
    { anchor: 'project', title: 'Project', content },
    { anchor: 'about', title: 'About', content },
    { anchor: 'gallery', title: 'Gallery', component: Gallery, content }
]

const elements = sections.map(({ anchor, title }) => ({
    anchor: '#' + anchor,
    title
}))

const ReturnButton = () => (
    <a href="#top" className={style.returnBtn}>
        <Section title="Go to top" />
    </a>
)

export const MainPage = () => (
    <React.Fragment>
        <Header elements={elements} />
        <Main sections={sections} />
        <Footer />
        <ReturnButton />
    </React.Fragment>
)

export default MainPage
