import React, { FC } from 'react'
import { IDashboardProps } from './Dashboard.props'
import { DataForWidget } from '../../Utils'
import { Htag } from '../../Features'
import CoinsWidget from './CoinsWidget/CoinsWidget'
import { ICoin } from '../../Store/CoinsSlice/ConisSlice.interface'

const Dashboard: FC<IDashboardProps> = ({ coins }) => {

    const coinsForWidget= DataForWidget<ICoin>(coins, 5)

    return (
        <>
            <Htag tag={'h1'}>Dashboard</Htag>
            <CoinsWidget coinsForWidget={coinsForWidget}/>

        </>


    )
}

export default Dashboard

