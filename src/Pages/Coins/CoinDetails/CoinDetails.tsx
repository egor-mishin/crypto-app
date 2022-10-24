import React, { FC } from 'react'
import css from './CoinDetails.module.scss'
import { Htag } from '../../../Features'
import { ICoinProps } from './Coin.props'
import { data, options } from '../../../Utils/charts'
import { Line } from 'react-chartjs-2'

const CoinDetails: FC<ICoinProps> = (): JSX.Element => {

    return (
        <>
            <Htag tag={'h1'}>Coin details</Htag>
            <div className={css.container}>
                {<Line data={data} options={options}/>}
            </div>
        </>
    )
}

export default CoinDetails

