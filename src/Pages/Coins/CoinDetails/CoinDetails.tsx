import React, { FC } from 'react'
import css from './CoinDetails.module.scss'
import { Htag } from '../../../Features'
import { ICoinProps } from './Coin.props'
import { useParams } from 'react-router-dom'

const CoinDetails: FC<ICoinProps> = (): JSX.Element => {
    const {uuid} = useParams()
    return (
        <>
            <Htag tag={'h1'}>{uuid}</Htag>
            <div className={css.container}>

            </div>
        </>
    )
}

export default CoinDetails

