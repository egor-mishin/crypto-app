import React, { FC } from 'react'
import { IButtonProps } from './IButtonProps'
import cn from 'classnames'
import css from './Button.module.scss'

const Button: FC<IButtonProps> = ({ children, size = 's', kind, click, params }, props): JSX.Element => {
    return (
        <button
            onClick={(() => click && click({params}))}
            className={
                cn(css.button, {
                    [css.regular]: kind === 'regular',
                    [css.outline]: kind === 'outline',
                    [css.auth]: kind === 'auth',
                    [css.login]: kind === 'login',
                    [css.more]: kind === 'more',
                })
            }
            {...props}
        >
            {children}
        </button>
    )
}


export default Button

