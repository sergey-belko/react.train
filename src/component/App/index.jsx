import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { InfoPage, MainPage, FormPage, MobxPage } from '@component/Page'
import Head from '@component/Head'
import RouterHeader from '@component/RouterHeader'

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
        path: '/:id',
        component: (props) => <InfoPage store={appStore} {...props} />,
        title: 'Info ID'
    },
    {
        path: '/mobx',
        component: (props) => <MobxPage store={appStore} {...props} />,
        title: 'Mobx'
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
