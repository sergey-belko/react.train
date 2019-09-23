import { Footer, Header, Main, ReturnBtn } from '@component'
import { inject } from "@store"
import React from 'react'

export const MainPage = inject('Main')((props) => (
    <>
        <Header elements={props.Main.sections} />
        <Main title="Pineapples!" sections={props.Main.sections} />
        <Footer />
        <ReturnBtn />
    </>
))

export default MainPage
