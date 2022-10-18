import React, { FC } from 'react'
import { INewsProps } from './News.props'
import { Htag } from '../../Features'

const News: FC<INewsProps> = (): JSX.Element => {
    return (
        <>
            <Htag tag={'h1'}>News</Htag>
            <div className='container'>

            </div>
        </>
    )
}

export default News

