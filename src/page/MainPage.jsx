import React from 'react'
import { Header, Footer, Main, ReturnBtn } from '@component'
import { useStore } from '@store'

export const MainPage = () => {
    const { sections } = useStore('Main')
    return (
        <>
            <Header elements={sections} />
            <Main title="Pineapples!" sections={sections} />
            <Footer />
            <ReturnBtn />
        </>
    )
}

export default MainPage
