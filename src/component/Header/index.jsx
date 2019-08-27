import React from 'react'
import style from './style.css'

const Header = ({ elements = [] }) => (
    <navigation className={style.container}>
        <ul className={style.navigation}>
            {elements.map(({ title, anchor }) => (
                <li key={anchor}>
                    <a className={style.link} href={anchor}>
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    </navigation>
)

export default Header
