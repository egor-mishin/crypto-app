import React, { FC } from 'react'
import { IFooterProps } from './Footer.props'
import css from './Footer.module.scss'

const Footer: FC<IFooterProps> = () => {
    return (
        <footer className={css.footer}>Footer</footer>
    )
}

export default Footer

