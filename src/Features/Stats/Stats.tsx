import React, { FC } from 'react'
import { IStatsProps } from './Stats.interface'
import StatsItem from './StatItem/StatsItem'
import css from './Stats.module.scss'

const Stats: FC<IStatsProps> = ({totalCoins, totalMarkets, totalExchanges , totalMarketCap, total24hVolume}): JSX.Element => {

    return (
        <div className={css.stat}>
          <StatsItem statItem={totalCoins} title={'Total Coins Statistics'}/>
          <StatsItem statItem={totalMarkets} title={'Total Market Statistics'}/>
          <StatsItem statItem={totalExchanges} title={'Total Exchange Statistics'}/>
          <StatsItem statItem={totalMarketCap} title={'Market Cap'}/>
          <StatsItem statItem={total24hVolume} title={'24 Volume'}/>
        </div>
    )
}

export default Stats

