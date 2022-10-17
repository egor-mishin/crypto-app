import React, { FC } from 'react'
import Logo from './Logo/Logo'
import { INavBarProps } from './NavBar.props'
import { routes } from './routes'
import { Link } from 'react-router-dom'
import css from './NavBar.module.scss'
import Footer from '../../Footer/Footer'

const NavBar: FC<INavBarProps> = () => {
    return (
        <aside className={css.sidebar}>
            <Logo />
            <nav>
                {routes.map((r, i) => <li key={`${i}-"link"`}><Link to={Object.values(r)[0]}>{Object.keys(r)[0]}</Link>
                </li>)}
            </nav>
            <Footer />
        </aside>
    )
}

export default NavBar

