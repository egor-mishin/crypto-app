import React, { FC } from 'react'
import { ILayoutProps } from './Layout.props'
import Header from '../Header/Header'
import css from './Layout.module.scss'
import SideBar from '../SideBar/SideBar'

const Layout: FC<ILayoutProps> = ({ children }): JSX.Element => {
    return (
        <div className={css.container}>
            <Header />
            <SideBar/>
            {children}
        </div>
    )
}

export default Layout

