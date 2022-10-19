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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

const CoinCard: FC<ICoinCardProps> = ({ color, iconUrl, name, price, symbol }): JSX.Element => {
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
        <>
            <div style={{ borderColor: `${color ? color : '#000' }` }} className={css.imgContainer}>
                <img src={iconUrl} alt={name} />
            </div>
            {/*<Line data={data} options={options} />*/}
            <p className={css.price}>{minifyNumber(parseFloat(price), 3)}</p>
            <p className={css.name}>{name} ({symbol})</p>
        </>
    )
}

export default CoinCard

