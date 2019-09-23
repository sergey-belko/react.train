import React from 'react'
import Logo from '@img/logo.svg'
import style from './style.css'

const Header = ({ elements = [] }) => {
    return (
        <header className={style.container}>
            <Logo className={style.logo} />
            <ul className={style.navigation}>
                {elements.map(({ title, anchor }) => (
                    <li key={anchor}>
                        <a className={style.link} href={anchor}>
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    )
}
export default Header
