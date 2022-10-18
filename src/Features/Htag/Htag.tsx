import React, { FC } from 'react'
import { IHtag } from './Htag.props'
import css from './Htag.module.scss'

 const Htag: FC<IHtag> = ({ children  , tag= 'h1', ...props}): JSX.Element => {
    switch (tag) {
        case 'h1' :
            return <h1 className={css.h1}>{children}</h1>
        case 'h2' :
            return <h2 className={css.h1}>{children}</h2>
        case 'h3' :
            return <h3 className={css.h1}>{children}</h3>
        case 'h4' :
            return <h4 className={css.h1}>{children}</h4>


    }
}

export default Htag
