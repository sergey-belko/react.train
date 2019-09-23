import React from 'react'
import style from './style.css'

export const Header = ({ elements = [] }) => (
    <nav className={style.container}>
        <ul className={style.navigation}>
            {elements.map(({ title, anchor }) => (
                <li key={anchor}>
                    <a className={style.link} href={'#' + anchor}>
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
)

export default Header
