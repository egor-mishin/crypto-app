import React, { FC } from 'react'
import { IHeaderProps } from './Header.props'
import css from './Header.module.scss'
import Auth from './Auth/Auth'

const Header: FC<IHeaderProps> = () => {
    return (
        <header className={css.header}>
            <Auth />
        </header>
    )
}

export default Header

