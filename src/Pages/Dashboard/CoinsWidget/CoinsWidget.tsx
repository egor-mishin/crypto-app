import React, { FC } from 'react'
import { ICoinsWidget } from './CoinsWidget.interface'
import { Card, CoinCard, Htag } from '../../../Features'
import css from './CoinsWidget.module.scss'

const CoinsWidget: FC<ICoinsWidget> = ({coinsForWidget}): JSX.Element => {
    return (
        <>
            <div className={css.border}>
                <Htag tag={'h2'}>Coins</Htag>
                <div className={css.coinsWidget}>
                    {
                        coinsForWidget.map(c => (
                            <Card size={'s'} key={c.uuid}>
                                <CoinCard {...c}/>
                            </Card>)
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default CoinsWidget

