import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '@img/logo.svg'
import style from './style.css'

export const RouterHeader = ({ elements = [] }) => (
    <header className={style.container}>
        <a name="top"></a>
        <Logo className={style.logo} />
        <ul className={style.navigation}>
            {elements.map(({ title, path }) => (
                <li key={path}>
                    <Link className={style.link} to={path}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    </header>
)

export default RouterHeader
