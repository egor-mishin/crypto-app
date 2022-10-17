import React, { FC } from 'react'
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom'
import { INavItem } from './NavLink.props'
import css from './NavItem.module.scss'

const NavItem: FC<INavItem> = ({link, title, icon}, ...props): JSX.Element => {
   const path = useResolvedPath(link)
    const isActive = useMatch({path: path.pathname, end: true})
    return (
        <>
            <NavLink to={link} className={isActive ? `${css.active} ${css.link}` : css.link}>
               <div className={css.icon}>
                   <img
                       src={icon}
                       alt={title} />
               </div>
                {title}
            </NavLink>
        </>
    )
}

export default NavItem

