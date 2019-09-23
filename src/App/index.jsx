import { Head, RouterHeader } from '@component'
import { FlexboxPage, FormPage, InfoPage, MainPage, MobxPage } from '@page'
import { StoreProvider } from "@store"
import { addKeyToItem } from '@util'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './global.css'

const elements = [
    {
        path: '/',
        component: MainPage,
        title: 'Main'
    },
    {
        path: '/info',
        component: InfoPage,
        title: 'Info'
    },
    {
        path: '/form',
        component: FormPage,
        title: 'Form'
    },
    {
        path: '/info/:id',
        component: InfoPage,
        title: 'Info ID'
    },
    {
        path: '/mobx',
        component: MobxPage,
        title: 'Mobx',
    },
    {
        path: '/flexbox',
        component: FlexboxPage,
        title: 'Flexbox'
    }
]

export const App = () => (
    <StoreProvider>
        <Head />
        <Router>
            <RouterHeader elements={elements} />
            {elements
                .map(addKeyToItem)
                .map((route) => (
                    <Route exact {...route} />
                ))}
        </Router>
    </StoreProvider>
)

export default App
