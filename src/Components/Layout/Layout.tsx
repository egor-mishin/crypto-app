import React, { FC } from 'react'
import { ILayoutProps } from './Layout.props'
import css from './Layout.module.scss'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'

const Layout: FC<ILayoutProps> = ({ children }): JSX.Element => {
    return (
        <div className={css.container}>
            <Header />
            <SideBar/>
            <main className={css.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout

