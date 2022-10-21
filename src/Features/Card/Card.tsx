import React, { FC } from 'react'
import { ICardProps } from './Card.props'
import css from './Card.module.scss'

const Card: FC<ICardProps> = ({ children }, props): JSX.Element => {
    return (
        <div className={css.card}
             {...props}>
            {children}
        </div>
    )
}

export default Card

