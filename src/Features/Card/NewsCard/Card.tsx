import React, { FC } from 'react'
import { ICardProps } from './Card.props'
import cn from 'classnames'
import css from './Card.module.scss'

const Card: FC<ICardProps> = ({ children, size= 'm' }, props): JSX.Element => {
    return (
        <div className={
            cn(css.card, {
                    [css.s]: size === 's',
                    [css.m]: size === 'm',
                    [css.l]: size === 'l',
                },
            )
        }

             {...props}>
            {children}
        </div>
    )
}

export default Card

