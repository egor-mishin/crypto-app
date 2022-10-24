import React, { FC } from 'react'
import { ICoinCardProps } from './CoinCard.props'
import css from './CoinCard.module.scss'
import { minifyNumber } from '../../../Utils/functions'
import cn from 'classnames'
import { Button, Htag } from '../../index'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IAuth } from '../../../Components/Header/Auth/Auth.interface'




const CoinCard: FC<ICoinCardProps> = ({uuid, color, iconUrl, name, price, symbol, rank, change, marketCap, size= 'm'}): JSX.Element => {
    const { isAuthenticated } = useAuth0<IAuth>()
    return (
        <div className={
            cn(css.card, {
                    [css.s]: size === 's',
                    [css.m]: size === 'm',
                    [css.l]: size === 'l',
                },
            )
        }>
            <div style={{ borderColor: `${color ? color : '#000' }` }} className={css.imgContainer}>
                <img src={iconUrl} alt={name} />
            </div>
            <div className={css.details}>
                <Htag tag={'h4'} className={css.name}>{rank}.{name} ({symbol})</Htag>
                <p className={css.item}>Price: <span>{minifyNumber(parseFloat(price), parseFloat(price) > 0.5 ? 3 : 5)}</span></p>
                <p className={css.item}>Market Cap: <span>{minifyNumber(parseFloat(marketCap), parseFloat(marketCap) > 0.5 ? 3 : 5)}</span></p>
                <p className={css.item}>Change:<span>{change} %</span></p>
            </div>
            <Link to={`/coins/${uuid}`}>
                { isAuthenticated &&
                    <Button kind={'outline'}>
                        Add to favorite
                    </Button>
                }
                <Button kind={'more'}>
                    Coin details
                </Button>
            </Link>
        </div>
    )
}

export default CoinCard

