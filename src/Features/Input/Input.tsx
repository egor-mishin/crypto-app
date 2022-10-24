import React, { FC } from 'react'
import cn from 'classnames'
import css from './Input.module.scss'
import { IInputProps } from './Input.props'
import searchIcon from './Assets/search.svg'

const Button: FC<IInputProps> = ({ children, kind = 'regular' }, props): JSX.Element => {
    return (
        <button
            className={
                cn(css.input, {
                    [css.regular]: kind === 'regular',
                    [css.search]: kind === 'search',
                    [css.auth]: kind === 'auth',
                })
            }
            {...props}
        >

            {children}
            {
                kind === 'search' && <img src={searchIcon} alt='Search' width={15} height={15}/>
            }
        </button>
    )
}

export default Button

