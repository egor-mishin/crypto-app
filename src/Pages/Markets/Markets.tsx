import React, { FC } from 'react'
import { IMarketsProps } from './Markets.props'
import { Htag } from '../../Features'

const Markets: FC<IMarketsProps> = (): JSX.Element => {
    return (
        <>
            <Htag tag={'h1'}>Markets</Htag>
            <div className='container'>

            </div>
        </>
    )
}

export default Markets

