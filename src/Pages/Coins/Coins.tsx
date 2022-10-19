import React, { FC } from 'react'
import { ICoinsProps } from './Coins.props'
import { Card, CoinCard, Htag } from '../../Features'
import css from './Coins.module.scss'

const Coins: FC<ICoinsProps> = ({coins, title}): JSX.Element => {
    return (
       <>
           <Htag tag={'h1'}>{title}</Htag>
          <div className={css.container}>
              {
                  coins.map(c=> <Card size={'s'} key={c.uuid}>
                      <CoinCard {...c}/>
                  </Card>)
              }
          </div>
       </>
    )
}

export default Coins

