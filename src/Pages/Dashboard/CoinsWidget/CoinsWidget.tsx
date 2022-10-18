import React, { FC } from 'react'
import { ICoinsWidget } from './CoinsWidget.interface'
import { Card } from '../../../Features'
import css from './CoinsWidget.module.scss'
import { minifyNumber } from '../../../Utils'

const CoinsWidget: FC<ICoinsWidget> = ({coinsForWidget}): JSX.Element => {
    console.log(coinsForWidget)
    return (
        <div className={css.coinsWidget}>
            {
                coinsForWidget.map(c => (
                    <Card size={'s'} key={c.uuid}>
                        <img src={c.iconUrl} alt={c.name} />
                        <p>{minifyNumber(parseFloat(c.btcPrice), 6)}</p>
                    </Card>)
                )
            }
        </div>
    )
}

export default CoinsWidget

