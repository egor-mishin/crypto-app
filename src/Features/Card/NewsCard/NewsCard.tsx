import React, { FC } from 'react'
import { INewsProps } from './NewsCard.props'
import cn from 'classnames'
import css from './NewsCard.module.scss'
import { Link } from 'react-router-dom'

const NewsCard: FC<INewsProps> = ({title, url, source}, props): JSX.Element => {
    return (
        <div className={css.newsCard}
            {...props}>
            <Link to={url}>{title}</Link>
        </div>
    )
}

export default NewsCard

