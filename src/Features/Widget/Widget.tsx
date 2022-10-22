import React, { FC } from 'react'
import { ICoinsWidget } from './Widget.interface'
import { Htag } from '../index'
import css from './Widget.module.scss'
import cn from 'classnames'

const Widget: FC<ICoinsWidget> = ({type, children, title}): JSX.Element => {
    return (
        <>
            <div className={css.border}>
                <Htag tag={'h2'}>{title}</Htag>
                <div className={cn(css.widget, {
                    [css.coins]: type === 'coins',
                    [css.stats]: type === 'stats',
                    [css.news]: type === 'news'
                })}>
                    {children}
                </div>

            </div>
        </>
    )
}

export default Widget

