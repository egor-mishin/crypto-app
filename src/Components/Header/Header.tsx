import React, {FC} from "react"
import {IHeaderProps} from "./Header.props"
import NavBar from "./NavBar/NavBar";
import css from './Header.module.scss'

const Header:FC<IHeaderProps> = () => {
    return (
        <header className={css.header}>
         Header
        </header>
    )
}

export default Header

