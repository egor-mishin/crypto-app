import React, { FC } from 'react'
import { IHeaderProps } from './Header.props'
import css from './Header.module.scss'
import SearchInput from './SearchInput/SearchInput'
import Auth from './Auth/Auth'

const Header: FC<IHeaderProps> = () => {
    return (
        <header className={css.header}>
            <SearchInput />
            <Auth />
        </header>
    )
}

export default Header

