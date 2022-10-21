import React, { FC } from 'react'
import { ICoinCardProps } from './CoinCard.props'
import css from './CoinCard.module.scss'
import { minifyNumber } from '../../../Utils'
import { Line } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Htag } from '../../index'
import cn from 'classnames'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

const CoinCard: FC<ICoinCardProps> = ({ color, iconUrl, name, price, symbol, rank, change, marketCap, size= 'm' }): JSX.Element => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Price In USD',
                data: [66, 66, 777, 888],
                fill: true,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    }

    const options = {

        scales: {
            x: {

                display: true,
                grid: {
                    display: false,
                },
            },
            y: {

                display: true,
                grid: {
                    display: false,
                },
            },
        },
    }

    return (
        <div className={
            cn(css.card, {
                    [css.s]: size === 's',
                    [css.m]: size === 'm',
                    [css.l]: size === 'l',
                },
            )
        }>
            <div style={{ borderColor: `${color ? color : '#000' }` }} className={css.imgContainer}>
                <img src={iconUrl} alt={name} />
            </div>
            <div className={css.details}>
                <Htag tag={'h4'} className={css.name}>{rank}.{name} ({symbol})</Htag>
                <p className={css.item}>Price: <span>{minifyNumber(parseFloat(price), parseFloat(price) > 0.5 ? 3 : 5)}</span></p>
                <p className={css.item}>Market Cap: <span>{minifyNumber(parseFloat(marketCap), parseFloat(marketCap) > 0.5 ? 3 : 5)}</span></p>
                <p className={css.item}>Change:<span>{change} %</span></p>

            </div>
            {/*<Line data={data} options={options} />*/}

        </div>
    )
}

export default CoinCard

