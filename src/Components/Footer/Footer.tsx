import React, { FC } from 'react'
import { IFooterProps } from './Footer.props'
import css from './Footer.module.scss'

const Footer: FC<IFooterProps> = () => {
    return (
        <footer className={css.footer}>
            <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.26722 6.903L10.8867 13.812L17.3442 6.903L21.3867 11.04L14.7927 18L21.3867 24.9045L17.3442 29.094L10.8867 22.188L4.26722 29.094L0.386719 25.02L6.92672 17.961L0.386719 11.04L4.26722 6.9045V6.903ZM4.79972 6.339L10.8597 0L16.9197 6.339L13.7307 9.7365L10.8597 6.5655L7.98872 9.7365L4.79972 6.339V6.339ZM4.79972 29.661L7.98872 26.2635L10.8597 29.4345L13.7307 26.2635L16.9197 29.661L10.8597 36L4.79972 29.661Z" fill="#979797"/>
            </svg>
            <p>
                Simple crypto news platform for
                everyone. Powered by <a href='https://egormishin.com'>Egor Mishin</a>
            </p>
        </footer>
    )
}

export default Footer

