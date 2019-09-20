import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { InfoPage, MainPage, FormPage, MobxPage, FlexboxPage } from '@page'
import { Head, RouterHeader } from '@component'
import { StoreProvider } from "@store"
import { useStore } from '@store'

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
        component: (props) => <InfoPage store={useStore('User')} {...props} />,
        title: 'Info ID'
    },
    {
        path: '/mobx',
        component: (props) => <MobxPage store={useStore('User')} {...props} />,
        title: 'Mobx'
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
            {elements.map((route, index) => (
                <Route key={index} exact {...route} />
            ))}
        </Router>
    </StoreProvider>
)

export default App
