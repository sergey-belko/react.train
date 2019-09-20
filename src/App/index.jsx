import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { InfoPage, MainPage, FormPage, MobxPage, FlexboxPage } from '@page'
import { Head, RouterHeader } from '@component'

import './global.css'

import { observable, action } from 'mobx'

const appStore = observable({
    name: 'John',
    updateName: action('Update name', () => {
        appStore.name = appStore.name + 1
    })
})

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
        component: (props) => <InfoPage store={appStore} {...props} />,
        title: 'Info ID'
    },
    {
        path: '/mobx',
        component: (props) => <MobxPage store={appStore} {...props} />,
        title: 'Mobx'
    },
    {
        path: '/flexbox',
        component: FlexboxPage,
        title: 'Flexbox'
    }
]

export const App = () => (
    <>
        <Head />
        <Router>
            <RouterHeader elements={elements} />
            {elements.map((route, index) => (
                <Route key={index} exact {...route} />
            ))}
        </Router>
    </>
)

export default App
