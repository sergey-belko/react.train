import React from 'react'
import { Header, Footer, Main, Gallery, ReturnBtn } from '@component'

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.`

const sections = [
    { title: 'Main' },
    { title: 'Project' },
    { title: 'About' },
    { title: 'Gallery', component: Gallery }
].map((item) => ({ ...item, content, anchor: item.title.toLowerCase().replace(' ', '') }))

export const MainPage = () => (
    <>
        <Header elements={sections} />
        <Main title="Pineapples!" sections={sections} />
        <Footer />
        <ReturnBtn />
    </>
)

export default MainPage
