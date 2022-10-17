import React, { FC } from 'react'
import { routes } from '../routes'
import NavItem from './NavItem/NavItem'
import { INavBarProps } from '../SideBar.props'
import css from './NavBar.module.scss'

const NavBar: FC<INavBarProps> = (): JSX.Element => {
    return (
        <nav className={css.navigation}>
            {routes.map((r, i) => <NavItem title={r.title} link={r.link}
                                           key={`${i}-${r.title}`} icon={r.icon}/>)}
        </nav>
    )
}

export default NavBar

