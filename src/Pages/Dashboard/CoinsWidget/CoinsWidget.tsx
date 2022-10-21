import React, { FC } from 'react'
import { ICoinsWidget } from './CoinsWidget.interface'
import { Card, CoinCard, Htag } from '../../../Features'
import css from './CoinsWidget.module.scss'

const CoinsWidget: FC<ICoinsWidget> = ({coinsForWidget}): JSX.Element => {
    return (
        <>
            <div className={css.border}>
                <Htag tag={'h2'}>Top 5 coins</Htag>
                <div className={css.coinsWidget}>
                    {
                        coinsForWidget.map(c => (
                            <Card key={c.uuid}>
                                <CoinCard {...c}  size={'s'}/>
                            </Card>)
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default CoinsWidget

