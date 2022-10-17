import React, { FC } from 'react'
import Logo from './Logo/Logo'
import { INavBarProps } from './SideBar.props'
import css from './SideBar.module.scss'
import NavBar from './NavBar/NavBar'
import Footer from '../Footer/Footer'

const SideBar: FC<INavBarProps> = () => {
    return (
        <aside className={css.sidebar}>
            <Logo />
            <NavBar/>
            <Footer />
        </aside>
    )
}

export default SideBar

