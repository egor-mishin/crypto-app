import React, { FC } from 'react'
import { IStatsProps } from './StatsItem.interface'
import { Htag } from '../../index'
import css from './StatsItem.module.scss'
import { minifyNumber } from '../../../Utils'

const StatsItem: FC<IStatsProps> = ({statItem, title}): JSX.Element => {
    return (
        <div className={css.statItem}>
            <Htag tag={'h4'}>{title}:</Htag>
            <p>{statItem && minifyNumber(parseFloat(statItem as string), 3)}</p>
        </div>
    )
}

export default StatsItem

