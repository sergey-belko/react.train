import React from 'react'
import style from './footer.css'

const Footer = () => (
    <footer className={style.footer}>
        <a className={style.footer__return_button} href="#top">
            Go to top
        </a>
        <section>
            <a name="contact"></a>
            <h2>Contact us</h2>
            <form className={style.footer__form}>
                <input type="email" placeholder="Enter email" />
                <button type="submit">Submit</button>
            </form>
        </section>
        <section>
            <h2>Address</h2>
            <address> Some street in Lousiana </address>
        </section>
    </footer>
)

export default Footer
