import React from 'react'
import Section from '@component/Section'
import style from './style.css'

const Footer = () => (
    <footer className={style.footer}>
        <Section title="Contact us" className={style.section}>
            <a name="contact"></a>
            <form className={style.footer__form}>
                <input type="email" placeholder="Enter email" />
                <button type="submit">Submit</button>
            </form>
        </Section>
        <Section title="Address" className={style.section}>
            <address> Some street in Lousiana </address>
        </Section>
    </footer>
)

export default Footer
