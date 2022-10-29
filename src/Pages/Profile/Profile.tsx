import React, { FC } from 'react'
import { IProfileProps } from './Profile.props'
import { Card, CoinCard, Htag } from '../../Features'
import Widget from '../../Features/Widget/Widget'

export const Profile: FC<IProfileProps> = ({coinsForWidget}): JSX.Element => {
    return (
        <>
            <Htag tag={'h1'}>Profile</Htag>
            <div className='container'>
                <Widget type={'coins'} title={'My favorite coins'}>
                    {
                        coinsForWidget.map(c => (
                            <Card key={c.uuid}>
                                <CoinCard {...c} size={'s'} />
                            </Card>),
                        )
                    }
                </Widget>
            </div>
        </>
    )
}

export default Profile

