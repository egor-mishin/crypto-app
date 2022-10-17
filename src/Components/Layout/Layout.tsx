import React, { FC } from 'react'
import { ILayoutProps } from './Layout.props'
import Header from '../Header/Header'
import css from './Layout.module.scss'
import NavBar from '../Header/NavBar/NavBar'

const Layout: FC<ILayoutProps> = ({ children }): JSX.Element => {
    return (
        <div className={css.container}>
            <Header />
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout

