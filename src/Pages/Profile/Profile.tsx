import React, { FC } from 'react'
import { IProfileProps } from './Profile.props'
import { Htag } from '../../Features'

export const Profile: FC<IProfileProps> = (): JSX.Element => {
    return (
        <>
            <Htag tag={'h1'}>Profile</Htag>
            <div className='container'>

            </div>
        </>
    )
}

export default Profile

