import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { InfoPage, MainPage, FormPage } from '@component/Page'
import Head from '@component/Head'
import RouterHeader from '@component/RouterHeader'

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
        path: '/:id',
        component: InfoPage,
        title: 'Info ID'
    }
]

const App = () => (
    <React.Fragment>
        <Head />
        <Router>
            <RouterHeader elements={elements} />
            {elements.map((route, index) => (
                <Route key={index} exact {...route} />
            ))}
        </Router>
    </React.Fragment>
)

export default App
