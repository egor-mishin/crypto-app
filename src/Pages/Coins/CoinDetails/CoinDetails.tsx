import React, { FC, useEffect } from 'react'
import css from './CoinDetails.module.scss'
import { Htag } from '../../../Features'
import { ICoinProps } from './Coin.props'
import { data, options } from '../../../Utils/charts'
import { Line } from 'react-chartjs-2'
import { useAppDispatch, useAppSelector } from '../../../Hooks/rtk-hooks'
import { getCoinData } from '../../../Store/coinSlice/coinSlice'
import { useParams } from 'react-router-dom'

const CoinDetails: FC<ICoinProps> = (): JSX.Element => {

    const dispatch = useAppDispatch()

    const {coinId} = useParams()

    useEffect(() => {
        if(coinId){
        dispatch(getCoinData({coinId, timePeriod: '7d'}))
        }
    }, [dispatch])

    const { coinData } = useAppSelector((state) => state.coinData)

    return (
        <>
            <Htag tag={'h1'}>{coinData?.name}</Htag>
            <div className={css.container}>
                {<Line data={data} options={options}/>}
            </div>
        </>
    )
}

export default CoinDetails

