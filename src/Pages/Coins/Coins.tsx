import React, { FC } from 'react'
import { ICoinsProps } from './Coins.props'
import { Card, CoinCard, Htag } from '../../Features'
import css from './Coins.module.scss'
import SearchInput from './SearchInput/SearchInput'

const Coins: FC<ICoinsProps> = ({ coins, title }): JSX.Element => {
    return (
        <>
            <Htag tag={'h1'}>{title}</Htag>
            <SearchInput />
            <div className={css.container}>
                {
                    coins.map(c => <Card key={c.uuid}>
                        <CoinCard {...c} size={'m'} />
                    </Card>)
                }
            </div>
        </>
    )
}

export default Coins

