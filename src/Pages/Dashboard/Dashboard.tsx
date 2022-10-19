import React, { FC } from 'react'
import { IDashboardProps } from './Dashboard.props'
import { DataForWidget } from '../../Utils'
import { Htag } from '../../Features'
import CoinsWidget from './CoinsWidget/CoinsWidget'
import { ICoin } from '../../Store/CoinsSlice/ConisSlice.interface'

const Dashboard: FC<IDashboardProps> = ({ coins,title }) => {

    const coinsForWidget= DataForWidget<ICoin>(coins, 5)

    return (
        <>
            <Htag tag={'h1'}>{title}</Htag>
            <CoinsWidget coinsForWidget={coinsForWidget}/>

        </>


    )
}

export default Dashboard

